import React, { useState } from 'react'
import { Box, Flex } from 'rebass'
import { CardLinkProps } from '../../components/card/card-link'
import { RadioMenu } from '../../components/radio/radio-menu'
import { CardProduct } from '../../components/card/card-product'
import { Title } from '../../components/title'
import { Line } from '../../components/line/line'

export interface FilterListProps {
  id?: number
  category?: string 
  product: CardLinkProps[] 
}

export interface ArrayProps {
  array:  FilterListProps[]
}

export const FilterList = ({ array }: ArrayProps) => {
  const [ element, setElement ] = useState(Number)

  const arrayFilter = array.find(x => x.id === element)
  
  return(
    <Flex mt='1rem' flexDirection='column'>
      <Box textAlign='center'>
        <Title>Horta Orgânic</Title>
      </Box>
      <Flex onChange={(event: any) => setElement(+event.target.value)} width='100%' justifyContent='space-around' >
        {array.map(( item ) => (
        <RadioMenu key={item.id} id={item.id} product={item.product} category={item.category} />
        ))}
      </Flex>
      <Flex ml='4rem' mr='4rem' flexWrap='wrap' >
      {arrayFilter?.product.map(( item ) => (
      <CardProduct 
        key={item.id}
        card={item}
      />
      ))}
      <Line />
    </Flex>
    </Flex>
  )
}
