import React from 'react'
import { ContainerCard, TitleCard, Text, ValueCard } from './styles'
import {useNavigate} from 'react-router-dom'

export interface CardLinkProps {
  id?: number
  children?: any
  title?: string
  price?: number
  username?:  UserName
  photo?: string
  onClick?: any
}

export interface UserName {
  about?: any
  id?: number
  name?: string
  password?: string
  photo?:string
  username?: string
}

export const CardLink = ({ children, id, title, price, photo, username}: CardLinkProps) => {
  const navigate = useNavigate()
  const goToInfo = (e: number | undefined) => {
    return e !== undefined ? navigate(`/produtos/${e}`) : ""
  }
  return(
    <>
    <ContainerCard  onClick={(e) => {
      e.stopPropagation()
      e.preventDefault()
      goToInfo(id)
    }}>
      <div>
        <img src={ photo } alt="text" />
      </div>
      <TitleCard>{ title }</TitleCard>
      <ValueCard>R{'$'} { price }</ValueCard>
      <Text>Produto vendido por { username?.name }</Text>
        {children}
    </ContainerCard>
    </>
  )
}