import { Link } from 'react-router-dom';

import { Input } from "../../components/input"
import { NavBar } from "../../components/nav-bar"

import Carrinho from '../../assets/images/Carrinho.png'
import Logo from '../../assets/images/Logo.png'
import test from '../../assets/images/test.png'

import { Flex } from "rebass"
import { CartStyles, PhotoStyles } from "./styles"
import { useState } from "react"

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

  return(
    <NavBar>
       <Link to='/'><Menu/></Link>
      <Input 
        value={element} 
        onChange={(event: any) => setElement(event.target.value)} 
        width="30%" 
        border 
        placeholder='Procurar'
      />
      <Flex style={{ gap: '4rem'}}>
        <Link to='/shop'><Cart/></Link>
        <PhotoMenu/>
      </Flex>
      </NavBar>
  )
}
