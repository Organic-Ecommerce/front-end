import React, { useEffect, useState } from 'react'

import { Header } from '../../business-components/header'
import { SalesMenu } from '../../business-components/sales-menu'
import { FilterList } from '../../business-components/filter'

import { array, product } from './mock'
import { busca } from '../../services/Service'
import { getItem } from '../../helpers/localStorage'

export const Home = () => {
  const [ list, setList ] = useState([])

  async function onSubmit(){

    try {
        await busca('/product', setList, {headers: {
                'Authorization': getItem('token')
            }} )				

    } catch (error) {
       
    }
}

  useEffect(() => {
    onSubmit()
  },[])
  
  return(
    <>
    <Header/>
    <FilterList array={array} />
    <SalesMenu array={product} />
   </>
  )
}