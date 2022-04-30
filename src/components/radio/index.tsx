import React, { InputHTMLAttributes } from 'react'
import { Container, RadioStyles, Span } from "./styles"

export interface InputRadioProps extends InputHTMLAttributes<HTMLInputElement>{
total?: number
}

export const InputRadio = ({ total, ...rest }: InputRadioProps) => {
  const item = 'itens'
  return(
    <Container>
      <RadioStyles type="radio" {...rest} />
      <Span>{total} {item}</Span>
    </Container>
  )
}