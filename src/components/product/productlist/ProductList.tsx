import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import useLocalStorage from 'react-use-localstorage'
import Product from '../../../models/Product'
import { busca, buscaFree } from '../../../services/Service'
import { UserState } from '../../../store/tokens/tokensReducer'
import { TitleCard, ValueCard } from '../../card/card-link/styles'
import { CardTeste } from './styled'

function ProductList() {
    
    let history = useHistory()
    
    // const [product, setProduct] = useState<Product[]>([])
    // const [token, setToken] = useLocalStorage('token');

    // async function getProduct(){
    //     await busca("/product", setProduct, {
    //         headers: {
    //             'Authorization': token
    //         }
    //     })
    // }

    // useEffect(() => {

    //     getProduct()
        
    // }, [product.length])

    const [product, setProduct] = useState<Product[]>([])

    async function getProduct(){
        await buscaFree("/product", setProduct)
    }

    useEffect(() => {

        getProduct()
        
    }, [product.length])

  return (

<>
    {product.map(product => (

        <CardTeste>
        <div>
        <img src={product.photo} alt="text" />
      </div>
      <TitleCard>{product.title}</TitleCard>
      <ValueCard>R$ {product.price}</ValueCard>
      <p>Produto vendido por {product.username?.name}</p>
        </CardTeste>
    ))
  }
</>


  )
}

export default ProductList