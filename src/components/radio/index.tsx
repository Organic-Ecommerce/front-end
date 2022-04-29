import React, { InputHTMLAttributes } from 'react'
import { Container, RadioStyles, Span } from "./styles"

export interface InputRadioProps extends InputHTMLAttributes<HTMLInputElement>{
text: string
}

export const InputRadio = ({ text, ...rest }: InputRadioProps) => {
  return(
    <Container>
      <RadioStyles type="radio" {...rest} />
      <Span>{text}</Span>
    </Container>
  )
}