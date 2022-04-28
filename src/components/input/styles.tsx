import styled from "styled-components";

export const InputStyles = styled.input<{radius?: string, border: string}>`
  width: 100%;
  background: white;
  border: ${ props => props.border ? "2px solid #606C38" : "1px solid #404040;"};
  border-radius: ${ props => props.radius ?? '4px' };
  padding: 0.5rem 1.3rem;
  font-size: 20px;
  ::placeholder {
    color: #D8D8D8;
  }
`

export const Div = styled.div<{width?: string}>`
 width: ${ props => props.width ?? 'auto' };
  
`
