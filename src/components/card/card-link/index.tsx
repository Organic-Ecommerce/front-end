import React from 'react'
import {useNavigate} from 'react-router-dom'
import { ContainerCard, TitleCard, Text, ValueCard } from './styles'

export interface CardLinkProps {
  id?: number
  children?: any
  title?: string
  price?: number
  username?: string
  photo?: string,
  onClick?: any
}
export const CardLink = ({ children, id ,title, price, username, photo }: CardLinkProps) => {
  
  const navigate = useNavigate()
  
  const goToInfo = (e: number | undefined) => {
    return e !== undefined ? navigate(`/produtos/${e}`) : ""
  }

  return(
    <>
    <ContainerCard onClick={(e) => {
      e.stopPropagation()
      e.preventDefault()
      goToInfo(id)
    }} >
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