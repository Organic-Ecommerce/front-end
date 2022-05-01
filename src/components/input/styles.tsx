import styled from "styled-components";

export const InputStyles = styled.input<{radius?: string, border: string}>`
  width: 100%;
  background: white;
  border: ${ props => props.border ? "1px solid #606C38" : "1px solid #404040;"};
  border-radius: ${ props => props.radius ?? '1px' };
  padding: 0.5rem 1.3rem;
  font-size: 20px;
  height: ${ props => props.height ?? 'auto' };
  ::placeholder {
    color: #D8D8D8;
  }
`

export const Div = styled.div<{width?: string}>`
 width: ${ props => props.width ?? 'auto' };
`

export const Label = styled.p`
padding-bottom: 8px;
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;
letter-spacing: 0.636364px;
color: #404040;
`
