import React from 'react'
import { useNavigate } from 'react-router-dom';
import { getItem, setItem } from '../../../helpers/localStorage';

import { Button } from '../../button';
import { CardLink, CardLinkProps } from '../card-link';

export interface CardScrollProps {
  onClick?: any
  itemId?: any
  card?: CardLinkProps

}
export const CardProduct = ({ onClick, card }: CardScrollProps) => {
  const navigate = useNavigate()

  const addToCart = (e: number | undefined ) => {
    //verifica se existe cartList
    const cartList = getItem('cartList')
    if (cartList) {
      //verifica se já existe o item com o mesmo id
      const itemExists = cartList.some( (item: CardLinkProps) => item.id === e )
      if(itemExists) {
        navigate('/shop')
      } else {
        //adiciona mais um item ao cartList
        setItem('cartList', [...cartList, card])
      }
    } else {
      setItem('cartList', [card])
    }
  }
  
  return(
    <div>
      <CardLink  {...card}>
        <Button onClick={() => {addToCart(card?.id)}} >Adicionar</Button>
      </CardLink>
  </div>
  )
}