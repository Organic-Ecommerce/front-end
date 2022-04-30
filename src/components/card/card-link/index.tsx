import React from 'react'
import { ContainerCard, TitleCard, Text, ValueCard } from './styles'

export interface CardLinkProps {
  id?: number
  children?: any
  title?: string
  price?: number
  username?: string
  photo?: string
}
export const CardLink = ({ children, title, price, username, photo }: CardLinkProps) => {
  return(
    <>
    <ContainerCard>
      <div>
        <img src={ photo } alt="text" />
      </div>
      <TitleCard>{ title }</TitleCard>
      <ValueCard>R{'$'} { price }</ValueCard>
      <Text>Produto vendido por { username }</Text>
        {children}
    </ContainerCard>
    </>
  )
}