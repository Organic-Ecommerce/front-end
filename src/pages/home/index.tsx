import React, { useEffect, useState } from 'react'

import { Header } from '../../business-components/header'
import { SalesMenu } from '../../business-components/sales-menu'
import { FilterList } from '../../business-components/filter'

import { array, product } from './mock'
import { busca } from '../../services/Service'
import { getItem } from '../../helpers/localStorage'

export const Home = () => {
  const [ list, setList ] = useState([])
  const [ listt, setListt ] = useState([])

  async function onSubmit(){

    try {
        await busca('/product', setList, {headers: {
                'Authorization': getItem('token')
            }} )				

    } catch (error) {
       
    }
}

async function onSubmi(){

  try {
      await busca('/category', setListt, {headers: {
              'Authorization': getItem('token')
          }} )				

  } catch (error) {
     
  }
}



  useEffect(() => {
    onSubmit()
    onSubmi()
    
  },[])
 
  return(
    <>
    <Header/>
    <FilterList array={listt} />
    <SalesMenu array={ list.map((item : any) => {
      const { category, ...rest } = item 
      return rest
   })} />
   </>
  )
}