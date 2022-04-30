<<<<<<< HEAD

import { useEffect, useState } from "react"

import { Box, Flex } from "rebass"
=======
<<<<<<< HEAD
>>>>>>> feat: create seach
import { Link } from 'react-router-dom';
=======
import { useEffect, useState } from "react"

import { Box, Flex } from "rebass"
>>>>>>> feat: create seach

import { Input } from "../../components/input"
import { NavBar } from "../../components/nav-bar"

import Carrinho from '../../assets/images/Carrinho.png'
import Logo from '../../assets/images/Logo.png'
import test from '../../assets/images/test.png'

import { CartStyles, PhotoStyles, AutocompleteStyles } from "./styles"

interface PhotoMenuProps {
  src?: string
}

const Cart = () => {
  return(
    <CartStyles>
      <img src={Carrinho} />
      </CartStyles>
  )
}

const PhotoMenu = ({ src }: PhotoMenuProps) => {
  return(
    <CartStyles>
    <PhotoStyles src={src ? src : test} />
    </CartStyles>
  )

}

const Menu = () => {
  return(
    <CartStyles>
    <img src={Logo} />
    </CartStyles>
  )

}

export const Header = () => {
  const [element, setElement] = useState()
  const [ filter, setFilter] =  useState<any>(null)
  async function fetchMyAPI(element: any) {
    let response = await fetch(`https://kitsu.io/api/edge/anime?filter[text]=${element}`)
     response = await response.json()
     setFilter(response)
  }
<<<<<<< HEAD

 useEffect(() => {
    if(element){
      fetchMyAPI(element)
    }
  }, [element])
=======
>>>>>>> feat: create seach

<<<<<<< HEAD
  return(
    <NavBar>
<<<<<<< HEAD
      <Menu/>
      <Box>
=======
       <Link to='/'><Menu/></Link>
=======
 useEffect(() => {
    if(element){
      fetchMyAPI(element)
    }
  }, [element])

  return(
    <NavBar>
      <Menu/>
      <Box>
>>>>>>> feat: create seach
>>>>>>> feat: create seach
      <Input 
        value={element} 
        onChange={(event: any) => setElement(event.target.value)} 
        width="100%" 
        border 
        placeholder='Procurar'
      />
      <AutocompleteStyles>
      {JSON.stringify(filter)}
      </AutocompleteStyles>
      </Box>
      <Flex style={{ gap: '4rem'}}>
        <Link to='/shop'><Cart/></Link>
        <PhotoMenu/>
      </Flex>
      </NavBar>
  )
}

