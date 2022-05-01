import React, {useEffect, useState} from 'react'
import { Box, Flex } from 'rebass'
import { Header } from '../../business-components/header'
import { ShopProduct } from '../../business-components/shop-product'
import { Button } from '../../components/button'
import { Card } from '../../components/card/card-geral'
import { CardLinkProps } from '../../components/card/card-link'
/* import { list } from '../../components/product/productlist/ListTest' */
import { Title } from '../../components/title'

import {getItem} from '../../helpers/localStorage'

export const Shop = () => {

  const [list, setList] = useState([])
  useEffect( () => {
    setList(getItem('cartList'))
  }, [] )

  return (
    <>
      <Header/>
      <Flex alignItems='center' flexDirection='column'>
        <Box width='85%'>
          <Box>
            <Title>Carrinho</Title>
          </Box>
          <Flex justifyContent='space-between'>
            <Box>
              {list.map((item: CardLinkProps)=> (
              <ShopProduct username={item.username} unids={1/*{item.unid}*/} {...item} />
              ))}
            </Box>
            <Flex mt='6rem' flexDirection='column' alignItems='center'>
            <Card>
              <Title>Itens</Title>
              <Title weight='400'>Total</Title>
              <Title weight='400'>38,80</Title>
            </Card>
            <Button>IR PARA PAGAMENTO</Button>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </>
  )
}






