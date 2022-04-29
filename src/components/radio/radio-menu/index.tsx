import React from 'react'
import { InputRadio, InputRadioProps } from '..'
import { Title } from '../../title'
import { ContainerRadio } from './styles'


interface RadioMenuProps extends  InputRadioProps {
label:string
}
export const RadioMenu = ({text, label }: RadioMenuProps) => {
  return(
      <ContainerRadio>
      <Title>{ label }</Title>
      <InputRadio name="gender" text={text} />
      </ContainerRadio>
  )
}