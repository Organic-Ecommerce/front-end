import React from 'react'

import { Header } from '../../business-components/header'
import { SalesMenu } from '../../business-components/sales-menu'
import { FilterList } from '../../business-components/filter'

import { array, product } from './mock'

export const Home = () => {

  return(
    <>
    <Header/>
    <FilterList array={array} />
    <SalesMenu array={product} />
   </>
  )
}