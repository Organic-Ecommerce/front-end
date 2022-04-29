import React from 'react'
import { Box, Flex } from 'rebass'
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
        <Box ml='6rem' mb='2rem'>
          <Title>Horta Orgânic</Title>
        </Box>
        <ScrollMenu/>
        <Flex flexDirection='column' alignItems='center'>
          <Title>Nossa Horta</Title>
          <Flex width='100%' justifyContent='space-around'>
          <RadioMenu text='teste' label='label'/>
          <RadioMenu text='teste' label='label'/>
          <RadioMenu text='teste' label='label'/>
        </Flex>
        </Flex>
       
   </>
  )
}