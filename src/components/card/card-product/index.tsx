import React from 'react'

import { Button } from '../../button';
import { CardLink, CardLinkProps } from '../card-link';

export interface CardScrollProps {
  onClick?: any
  itemId?: any
  card?: CardLinkProps

}
export const CardProduct = ({ onClick, card }: CardScrollProps) => {
    
  return(
    <div>
      <CardLink  {...card}>
        <Button>Adicionar</Button>
      </CardLink>
  </div>
  )
}