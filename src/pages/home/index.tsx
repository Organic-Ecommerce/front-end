import React, { useState } from 'react'

import { Header } from '../../business-components/header'
import { SalesMenu } from '../../business-components/sales-menu'
import { FilterList } from '../../business-components/filter'

import { array, product } from './mock'
import { busca } from '../../services/Service'

export const Home = () => {
  //url: any, setDado: any, header: any

  const [ list, setList ] = useState([])

  busca('/product', setList, '' )

  return(
    <>
    <Header/>
    <FilterList array={array} />
    <SalesMenu array={product} />
   </>
  )
}