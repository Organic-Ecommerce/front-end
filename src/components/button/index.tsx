import React from 'react'
import { ButtonStyles } from './styles'

interface ButtonProps {
  children: string
  width?: string;
  size?: string;
  onClick?: any;
}

export const Button = ( { children, width, onClick , size, ...rest }: ButtonProps) => {
  return(
    <>
      <ButtonStyles onClick={(e) => {
        e.stopPropagation()
        e.preventDefault()
        onClick()
      }} size={size} width={width} {...rest}>{children}</ButtonStyles>
    </>
  )
}