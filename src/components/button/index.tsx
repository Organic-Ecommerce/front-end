import React from 'react'
import { ButtonStyles } from './styles'

interface ButtonProps {
  children: string
  width?: string;
  size?: string;
}

export const Button = ( { children, width, size, ...rest }: ButtonProps) => {
  return(
    <>
      <ButtonStyles size={size} width={width} {...rest}>{children}</ButtonStyles>
    </>
  )
}