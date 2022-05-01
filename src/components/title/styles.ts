import styled from "styled-components";

export const TitleStyles = styled.h1<{ size?: string, weight?: string }>`
font-size: ${ props => props.size ?? '2rem' } ;
color: ${props => props.color ?? '#404040' };
font-weight: ${props => props.weight ?? '700' };
`