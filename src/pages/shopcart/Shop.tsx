import React, { useState } from 'react'
import styled from 'styled-components'
import list, {item1} from '../../components/product/productlist/ListTest'


function Shop() {

  const [cartList, setCartList] = React.useState(item1)

  const [unid, setUnid] = useState<number>(item1.unid)
  
   async function adiciona (unid: number){
    setUnid(unid + 1)
   }; 

   async function subtrai (unid: number){
     return  unid >= 1 ? setUnid(unid - 1) : ""
   }; 

   async function remove (unid: number){
    setUnid(unid = 0)
   };

  return (
    <>
    <ShopGroup>

        <div>
          <p>{item1.title}</p>
          <p>{item1.price}</p>
          <p>{item1.vendedor}</p>
          <p>{unid}</p>

          <button onClick={() => adiciona(unid)}> + </button>
          <button onClick={() => subtrai(unid)}> - </button>
          <button onClick={() => remove(unid)}> X </button>

        </div>

        <div>
          <p>Valot total</p>
          
        </div>

    </ShopGroup>
    </>
  )
}

export default Shop


export const ShopGroup = styled.div`

`




