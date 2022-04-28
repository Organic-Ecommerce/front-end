import React, { InputHTMLAttributes} from 'react'
import { InputStyles, Div } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name?: any
  width?: string;
  radius?: any
  border?: any
}

export const Input = ({ name, width, radius, border, ...rest }: InputProps) => {
  return(
    <Div width={width}>
       <InputStyles border={border} radius={radius} name={name} {...rest}/>
    </Div>
  )
}