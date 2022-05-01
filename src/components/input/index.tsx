import React, { InputHTMLAttributes} from 'react'
import { InputStyles, Div, Label } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name?: any
  width?: string;
  height?: string
  radius?: any
  border?: any
  text?: string
}

export const Input = ({ name, width, radius, border, height, text, ...rest }: InputProps) => {
  return(
    <Div width={width}>
      <Label>{text}</Label>
       <InputStyles height={height} border={border} radius={radius} name={name} {...rest}/>
    </Div>
  )
}