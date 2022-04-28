import React, { useContext} from 'react'
import { VisibilityContext } from 'react-horizontal-scrolling-menu';
import { Button } from '../../button';
import { CardLink } from '../../card/card-link';

interface CardScrollProps {
  onClick: any
  itemId?: any
}
export const CardScroll = ({ onClick, itemId }: CardScrollProps) => {
  const visibility = useContext(VisibilityContext);
    
  return(
    <div
    onClick={() => onClick(visibility)}
    tabIndex={0}
  >
      <CardLink>
        <Button>Adicionar</Button>
      </CardLink>
  </div>
  )
}