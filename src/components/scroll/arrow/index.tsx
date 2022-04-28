import React, { useContext } from 'react'
import { VisibilityContext } from 'react-horizontal-scrolling-menu';
import { Arrow } from './styles';

export const LeftArrow = () => {
  const { isFirstItemVisible, scrollPrev } = useContext(VisibilityContext)
  return(
    <Arrow disabled={isFirstItemVisible} onClick={() => scrollPrev()}>{'<'}</Arrow>
  )
}

export const RightArrow = () => {
  const { isLastItemVisible, scrollNext } = useContext(VisibilityContext)
  return(
    <Arrow disabled={isLastItemVisible} onClick={() => scrollNext()}>{'>'}</Arrow>
  )
}

