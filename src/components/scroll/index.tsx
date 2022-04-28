import React from 'react'

import { ScrollMenu } from 'react-horizontal-scrolling-menu';

import { LeftArrow, RightArrow} from './arrow'

interface ScrollMenuLateralProps {
  children: any
}

export const ScrollMenuLateral = ({ children }: ScrollMenuLateralProps) => {
   return(
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {children}
    </ScrollMenu>
   )
}