import React, { useState } from 'react'

import { ScrollMenuLateral } from '../../components/scroll';
import { CardScroll } from '../../components/scroll/card-scroll';

const getItems = () =>
  Array(20)
    .fill(0)
    .map((_, ind) => ({ id: `element-${ind}` }));

export const ScrollMenu = () => {

  const [items, setItems] = useState(getItems);
  const [selected, setSelected] = useState([]);
  const isItemSelected = (id: any) => !!selected.find((el) => el === id);

  const  handleClick = (id: any) => () => {
    const itemSelected = isItemSelected(id);

    setSelected((currentSelected) =>
      itemSelected
        ? currentSelected.filter((el) => el !== id)
        : currentSelected.concat(id)
    );
  };

  return(
    <ScrollMenuLateral>
      {items.map(({ id }) => (
      <CardScroll 
      itemId={id} // NOTE: itemId is required for track items
      key={id}
      onClick={handleClick(id)}
      />
      ))}
    </ScrollMenuLateral>
  )
}