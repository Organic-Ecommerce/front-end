import React from 'react'
import { ScrollMenu } from '../../business-components/scroll-menu'
import { Input } from '../../components/input'
import { NavBar } from '../../components/nav-bar'
import { InputRadio } from '../../components/radio'
import { RadioMenu } from '../../components/radio/radio-menu'
import { Title } from '../../components/title'

export const Home = () => {
  return(
   <>
   <NavBar>
     <Input placeholder='Procurar'/>
   </NavBar>
    <Title>Horta Orgânic</Title>
    <ScrollMenu/>
    <Title>Nossa Horta</Title>
   <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
    <RadioMenu text='teste' label='label'/>
    <RadioMenu text='teste' label='label'/>
    <RadioMenu text='teste' label='label'/>
   </div>
   </>
  )
}