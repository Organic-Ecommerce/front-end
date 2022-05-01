import styled from "styled-components"

export const CartStyles = styled.button`
background-color: transparent;
border: none;
position: relative;
cursor: pointer;
`

export const PhotoStyles = styled.img`
border-radius: 50%;
width: ${ props => props.width?? '50px' };
height: ${ props => props.height ?? '50px' };
`

export const AutocompleteStyles = styled.div<{display?: string}>`
height: 200px;
width: 100%;
background: white;
z-index: 1;
margin-right: 20px;
position: absolute;
border: 1px solid #DFDFDE;
display: ${ props => props.display ?? 'none' } ;
`

export const BoxStyles = styled.div`
position: relative;
width: 40%;
`

export const CartCount = styled.span`

  width: 1.2rem;
  height: 1.2rem;

  padding: .2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  bottom: 0;
  right: -5px;

  background-color: red;

  border-radius: 50%;
  color: white;

  font-size: .9rem;
  font-weight: bold;
`
