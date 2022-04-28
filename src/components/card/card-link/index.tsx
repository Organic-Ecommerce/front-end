import React from 'react'
import { ContainerCard, TitleCard, Text, ValueCard } from './styles'
import test from '../../../assets/images/test.png'

interface CardLinkProps {
  children?: any
}
export const CardLink = ({ children }: CardLinkProps) => {
  return(
    <>
    <ContainerCard>
      <div>
        <img src={test} alt="text" />
      </div>
      <TitleCard>Cenoura Organica 500 g</TitleCard>
      <ValueCard>R$ 8,50</ValueCard>
      <Text>Produto vendido por Jessica</Text>
        {children}
    </ContainerCard>
    </>
  )
}