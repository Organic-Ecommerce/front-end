import React, { useState } from 'react'
import { Box, Flex } from 'rebass'
import styled from 'styled-components'
import { Header } from '../../business-components/header'
import { CardLink, UserName } from '../../components/card/card-link'
import { Title } from '../../components/title'

import Delete from '../../assets/images/Delete.png'

import { ShopGroup, CartStyles } from './styles'

export interface CardCartProps {
  id?: number
  title?: string
  price?: number
  username?: UserName
  photo?: string
  unids?: any
}

export const ShopProduct = ({ title, price, username, photo, unids }: CardCartProps ) => {

  const [unid, setUnid] = useState<number>(unids)
  
   async function adiciona (unid: number){
    setUnid(unid + 1)
   }; 

   async function subtrai (unid: number){
     return  unid >= 1 ? setUnid(unid - 1) : ""
   }; 

   async function remove (unid: number){
    setUnid(unid = 0)
   };

  return (
    <>
    <ShopGroup>
      <Flex alignItems='center'>
        <CardLink
          photo={photo}
          title={title}
          price={price }
          username={username}
        />
        <Flex width='130px' justifyContent='space-between'> 
        <CartStyles onClick={() => subtrai(unid)}> - </CartStyles>
          <span>{unid}</span>
          <CartStyles onClick={() => adiciona(unid)}> + </CartStyles>
          <CartStyles onClick={() => remove(unid)}>
             <img src={Delete} alt="delete" />
          </CartStyles>
          </Flex>
        </Flex>
    </ShopGroup>
    </>
  )
}