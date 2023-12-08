import React from "react";
import { Tile } from '../tile/Tile';

export const TileList = ({ list }) => {
  return (
    <div>
      {
        list.map((item, index) => {
          const { name, ...description } = item;
          return <Tile
            key={`${index}-${Array.from(item.name)[0]}`}
            name={item.name}
            description={description}
          />
        })
      }
    </div>
  );
};
