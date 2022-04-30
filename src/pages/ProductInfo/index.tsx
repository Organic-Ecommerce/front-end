import React from 'react'
import { NavBar } from "../../components/nav-bar"
import { Button } from '../../components/button'
import info from './mock.json'

import {
  MainContainer,
  SalesmanContainer,
  ProductContainer,
  ProductInfoPic,
  ProductTags,
  ProductInfoText,
  ProductDescription
} from './styled'

import salesman_pic from '../../assets/images/salesman_pic.png'
import product_pic from '../../assets/images/onion_pic.png'


export const ProductInfo = () => {

  return (
    <>
      <MainContainer>
        <NavBar >
          <h1>Olá mundo</h1>
        </NavBar>
        <SalesmanContainer>
          <img src={salesman_pic} />
          <div>
            <p>
              <strong>
                Vendedor {info.salesman.name}
              </strong>
            </p>
            <p>
              Vendendo produtos orgânicos à {info.salesman.service_time + " meses"}
            </p>
          </div>
        </SalesmanContainer>
        <ProductContainer>
          <ProductInfoPic>
            <img src={product_pic} />
            <Button>
              Adicionar
            </Button>
          </ProductInfoPic>
          <div>
            <ProductTags>{info.tags.join("/")}</ProductTags>
            <ProductInfoText>
              Cebola Orgânica 500g
              <span>R$ 6,20</span>
            </ProductInfoText>
          
              <ProductDescription>
                <h2>
                  Descrição
                </h2>
                <p>{info.description}</p>
              </ProductDescription>
              <ProductDescription>
                <h2>Como Guardar</h2>
                <p>{info.product_info}</p>
              </ProductDescription>
            
          </div>
        </ProductContainer>
      </MainContainer>
    </>
  )
}