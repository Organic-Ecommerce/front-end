import styled from "styled-components";

export const TitleStyles = styled.h1<{ size?: string }>`
font-size: ${ props => props.size ?? '2rem' } ;
color: ${props => props.color ?? '#404040' };
`