import React, {useEffect, useState} from 'react'
import { Box, Flex } from 'rebass'
import { Header } from '../../business-components/header'
import { ShopProduct } from '../../business-components/shop-product'
import { Button } from '../../components/button'
import { Card } from '../../components/card/card-geral'
import { list } from '../../components/product/productlist/ListTest'
import { Title } from '../../components/title'
import { CardLinkProps } from '../../components/card/card-link'
/* import { list } from '../../components/product/productlist/ListTest' */

import {getItem, setItem} from '../../helpers/localStorage'
export const Shop = () => {

  const [list, setList] = useState([])

  useEffect( () => {
    const local = getItem('cartList').length  ? getItem('cartList')  : []
    console.log(local)
    setList(local)
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
              <ShopProduct key={item.id} username={item.username} unids={3} {...item} />
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






