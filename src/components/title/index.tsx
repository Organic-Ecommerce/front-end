import React from 'react'
import { TitleStyles } from './styles'

interface TitleProps {
 children: any
 size?: string;
 weight?: string
}

export const Title = ({ children, size, weight, ...rest }: TitleProps) => {
  return(
    <><TitleStyles weight={weight} size={size} {...rest}>{ children }</TitleStyles></>
  )
}
