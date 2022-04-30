import styled from "styled-components";

export const ButtonStyles = styled.button<{width?: string, size?: string}>`
background: #606C38;
color: white;
padding: 0.5rem ;
font-family: var(--main-font);
text-transform: uppercase;
border-radius: 100px;
border: 5px solid #606C38;
font-weight: 700;
background-color: ${props => props.color};
font-size: ${ props => props.size ?? '1rem' };
width: ${ props => props.width ?? '200px' } ;
box-shadow: 0px 12px 22px rgba(0, 0, 0, 0.24);
cursor: pointer;

`