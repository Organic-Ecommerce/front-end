import styled from "styled-components";

export const MainContainer = styled.main`
  width: 100vw;
  min-height: 100vh;
  
  display: flex;
  flex-direction: column;
  
  `
export const SalesmanContainer = styled.section`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 1rem 3rem 0rem;
  
  `
export const ProductContainer = styled.section`
  flex: 1;
  display: flex;
  gap: 3rem;
  flex-direction: row;
  padding: 0 3rem;
  align-self: center;
  
  & > div {
    display: flex;
    flex-direction: column;
    padding: 2rem 0;
  }
  
`
export const ProductInfoPic = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  gap: 6.8rem;
`
export const ProductTags = styled.p`
  font-size: 1rem;
  color: hsla(0,0,25%, 1);
  font-weight: 400;
  letter-spacing: .48px;
`
export const ProductInfoText = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  letter-spacing: .48px;
  display: flex;
  flex-direction: column;
  line-height: 37.5px;
  padding: 2rem 0;
  & > span{
    font-weight: bold;
    padding: 0 .75rem;
  }
`
export const ProductDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
  margin-bottom: 16px;
`