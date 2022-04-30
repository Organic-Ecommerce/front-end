import React from 'react'
import { InputRadio } from '..'
import { Title } from '../../title'
import { ContainerRadio } from './styles'

interface RadioMenuProps {
  id?:number
  category?:string
  product?: Array<any>
}
export const RadioMenu = ( props : RadioMenuProps) => {
  const { id, category, product} = props
  return(
      <ContainerRadio>
      <Title size='24px'>{ category }</Title>
      <InputRadio value={id} name="gender" total={product?.length} />
      </ContainerRadio>
  )
}