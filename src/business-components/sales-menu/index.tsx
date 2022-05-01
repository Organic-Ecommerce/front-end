import React from 'react'

import { Flex } from 'rebass';

import { CardProduct } from '../../components/card/card-product';

import { CardLinkProps } from '../../components/card/card-link';

export interface SalesMenuProps {
  array: CardLinkProps[] 
}

export const SalesMenu = ({ array}: SalesMenuProps) => {

  return(
    <Flex  m='4rem' justifyContent='space-between' flexWrap='wrap'>
      {array.map(( item ) => (
      <CardProduct 
        key={item.id}
        card={item}
      />
      ))}
    </Flex>
  )
}