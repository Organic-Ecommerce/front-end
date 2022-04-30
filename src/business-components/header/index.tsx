import { useEffect, useState } from "react"

import { Box, Flex } from "rebass"

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

 useEffect(() => {
    if(element){
      fetchMyAPI(element)
    }
  }, [element])

  return(
    <NavBar>
      <Menu/>
      <Box>
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
        <Cart/>
        <PhotoMenu/>
      </Flex>
      </NavBar>
  )
}

