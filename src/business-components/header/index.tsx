<<<<<<< HEAD
<<<<<<< HEAD

import { useEffect, useState } from "react"

import { Box, Flex } from "rebass"
=======
<<<<<<< HEAD
>>>>>>> feat: create seach
=======
<<<<<<< HEAD
>>>>>>> chore: update page shop
import { Link } from 'react-router-dom';
=======
import { useEffect, useState } from "react"

import { Box, Flex } from "rebass"
>>>>>>> feat: create seach
=======
import { useEffect, useState } from "react"

import { Box, Flex } from "rebass"
=======
import { Link } from 'react-router-dom';
>>>>>>> chore: update page shop
>>>>>>> chore: update page shop

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
<<<<<<< HEAD
  return(
    <NavBar>
<<<<<<< HEAD
      <Menu/>
      <Box>
=======
       <Link to='/'><Menu/></Link>
=======
=======
>>>>>>> chore: update page shop
 useEffect(() => {
    if(element){
      fetchMyAPI(element)
    }
  }, [element])

  return(
    <NavBar>
      <Menu/>
      <Box>
<<<<<<< HEAD
>>>>>>> feat: create seach
<<<<<<< HEAD
>>>>>>> feat: create seach
=======
=======
=======
  return(
    <NavBar>
       <Link to='/'><Menu/></Link>
>>>>>>> chore: update page shop
>>>>>>> chore: update page shop
>>>>>>> chore: update page shop
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

