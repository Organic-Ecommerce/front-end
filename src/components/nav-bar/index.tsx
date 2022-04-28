import React from 'react'
import { Nav, NavContainer } from './styles'

interface NavBarProps {
  children: any
}

export const NavBar = ({ children}: NavBarProps) => {
  return(
    <Nav>
      <NavContainer>
        { children }
      </NavContainer>
    </Nav>
  )
}