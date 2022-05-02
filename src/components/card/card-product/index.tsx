import React from 'react'

import { Button } from '../../button';
import { CardLink, CardLinkProps } from '../card-link';
import { useNavigate } from 'react-router-dom';
import { getItem, setItem } from '../../../helpers/localStorage';
export interface CardScrollProps {
  onClick?: any
  itemId?: any
  card?: CardLinkProps

}
export const CardProduct = ({ onClick, card }: CardScrollProps) => {
  const navigate = useNavigate()

  const addToCart = (e: number | undefined ) => {
    const local = getItem('cartList').length  ? getItem('cartList')  : []
    
    if(local){
      const itemExists = local.some((item: CardLinkProps) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        item.id === e
      })
        if(!itemExists){
          setItem('cartList', [...local, card])
        }
    }
  }
  return(
    <div>
      <CardLink  {...card}>
        <Button 
        onClick={(e) => {
           e.stopPropagation()
           e.preventDefault()
          addToCart(card?.id)}}>Adicionar</Button>
      </CardLink>
  </div>
  )
}