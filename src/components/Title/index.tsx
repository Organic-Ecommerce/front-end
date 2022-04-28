import React from 'react'
import { TitleStyles } from './styles'

interface TitleProps {
 children: any
 size?: string;
}

export const Title = ({ children, size, ...rest }: TitleProps) => {
  return(
    <><TitleStyles size={size} {...rest}>{ children }</TitleStyles></>
  )
}
