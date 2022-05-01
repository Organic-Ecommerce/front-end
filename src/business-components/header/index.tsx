import { useEffect, useState } from "react"

import { Text, Flex } from "rebass"
import { Link } from 'react-router-dom';

import { Input } from "../../components/input"
import { NavBar } from "../../components/nav-bar"

import Carrinho from '../../assets/images/Carrinho.png'
import Logo from '../../assets/images/Logo.png'
import test from '../../assets/images/test.png'

import { BoxStyles, CartStyles, PhotoStyles, AutocompleteStyles, CartCount } from "./styles"
import { getItem } from "../../helpers/localStorage";

interface PhotoMenuProps {
  src?: string
  size?:string ;
}

export const Header = () => {

  const test = [{ name: 'vanessa' }]

  const [element, setElement] = useState()
  const [filter, setFilter] = useState<any>(null)
  const [display, setDisplay] = useState<string>('none')
  const [cartCount, setCartCount] = useState<number>(0)

  async function fetchMyAPI(element: any) {
    let response = await fetch(`https://organicecommerce.herokuapp.com/product`)
     response = await response.json()
     setFilter(response)
     // {JSON.stringify(filter)}
  }

  console.log(filter)
  useEffect(() => { 
    const cartList = getItem('cartList')
    console.log(cartList)
    cartList ? setCartCount(cartList.length) : setCartCount(0)
  }, [])

  useEffect(() => {
    if (element) {
      fetchMyAPI(element)
    }
  }, [element])

  return(
    <div onClick={() => setDisplay('none')}> 
    <NavBar>
    <Link to='/home'><Menu/></Link>
      <BoxStyles >
      <Input
        onKeyUp={() => setDisplay('')} 
        value={element} 
        onChange={(event: any) => setElement(event.target.value)} 
        width="100%" 
        border 
        placeholder="Procurar"
      />
      <AutocompleteStyles display={display}>
     <Flex flexDirection='column' m='1rem' >
    {test.map((name)=> (
      <Text fontSize='18px' mb='1rem'>{name.name}</Text>
    ))}
     </Flex>
      </AutocompleteStyles>
      </BoxStyles>
      <Flex style={{ gap: '4rem'}}>
        <Link to='/shop'><Cart/></Link>
        <Link to='/perfil'><PhotoMenu/></Link>
      </Flex>
      </NavBar>
    </div>
  )
}

interface CartProps {
  cartItemsCount: number
}
const Cart = ({cartItemsCount}: CartProps) => {
  return (
    <CartStyles>
      <img src={Carrinho} />
      {
        cartItemsCount > 0 && <CartCount>{cartItemsCount > 9 ? "+9" : cartItemsCount}</CartCount>
      }
    </CartStyles>
  )
}

export const PhotoMenu = ({ src, size }: PhotoMenuProps) => {
  return(
    <CartStyles>
    <PhotoStyles width={size} height={size}  src={src ? src : test} />
    </CartStyles>
  )

}

const Menu = () => {
  return (
    <CartStyles>
      <img src={Logo} />
    </CartStyles>
  )

}

