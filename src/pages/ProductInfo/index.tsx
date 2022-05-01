import React from 'react'
import { NavBar } from "../../components/nav-bar"
import { Button } from '../../components/button'

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
import { Header } from '../../business-components/header'


export const ProductInfo = () => {
  return (
    <>
      <Header/>
      <MainContainer>
        <NavBar >
          <h1>Olá mundo</h1>
        </NavBar>
        <SalesmanContainer>
          <img src={salesman_pic} />
          <div>
            <p>
              <strong>
                Vendedor José Carlos de Almeida
              </strong>
            </p>
            <p>
              Vendendo produtos orgânicos à 3 meses
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
            <ProductTags>Organic/Horta Organic/Legumes</ProductTags>
            <ProductInfoText>
              Cebola Orgânica 500g
              <span>R$ 6,20</span>
            </ProductInfoText>
          
              <ProductDescription>
                <h2>
                  Descrição
                </h2>
                <p>
                  A Cebola é não só um dos temperos favoritos dos Brasileiros mas em todo o mundo,
                  utilizada na alimentação desde tempos pré-históricos. Seu sabor e cheiro
                  marcantes, dividem opiniões! Para os que separam pedacinho por pedacinho o
                  vegetal para por de lado no prato, a ciência tem inúmeros argumentos que
                  defendem sua importância para a saúde. A Cebola ajuda afinar o sangue, combater doenças
                  respiratórias, controlar a hipertensão além de funções anti-inflamatórias e diuréticas
                  (há pesquisas que tentam comprovar sua eficácia no combate à queda de cabelo!).
                  Para um sabor menos intenso, a Cebola deve ser preparada cozida ou assada.
                </p>
              </ProductDescription>
              <ProductDescription>
                <h2>Como Guardar</h2>
                <p>
                  Elas não gostam das batatas, não coloque as duas juntas já que emitem um gás
                  que acelera o apodrecimento. Precisam de um lugar com ventilação, mas normalmente
                  a sua dispensa faz o trabalho.Elas não gostam das batatas, não coloque as duas
                  juntas já que emitem um gás que acelera o apodrecimento. Precisam de um lugar
                  com ventilação, mas normalmente a sua dispensa faz o trabalho.

                </p>
              </ProductDescription>
            
          </div>
        </ProductContainer>
      </MainContainer>
    </>
  )
}