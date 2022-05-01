import React, {  TextareaHTMLAttributes} from 'react'
import { TextareaStyles, Div } from './styles'

interface TextareaProps  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name?: any
  width?: string;
  radius?: any
  border?: any
}

export const Textarea = ({ name, width, radius, border, ...rest }: TextareaProps) => {
  return(
    <Div width={width}>
       <TextareaStyles border={border} radius={radius} name={name} {...rest}/>
    </Div>
  )
}