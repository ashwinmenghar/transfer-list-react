import React, { useState } from "react";
import Item from "./Item";
import TransferButton from "./TransferButton";

const TransferList = () => {
  // list of index
  const [list, setList] = useState({
    left: [0, 1, 2, 3],
    right: [4, 5, 6, 7],
  });

  //   Store all move
  const [move, setMove] = useState({
    left: [],
    right: [],
  });

  //   Move all to left or right
  const moveAllItems = (direction) => {
    setList((prev) => {
      return direction === "left"
        ? { left: [...prev.left, ...prev.right], right: [] }
        : { left: [], right: [...prev.right, ...prev.left] };
    });
  };

  //   Toggle items
  const toggleItemSelection = (id, direction) => {
    setMove((prev) => {
      const isMovingLeft = direction === "left";

      return {
        left: isMovingLeft
          ? prev.left.filter((item) => item !== id)
          : [...prev.left, id],
        right: isMovingLeft
          ? [...prev.right, id]
          : prev.right.filter((item) => item !== id),
      };
    });
  };

  //   Move selected items to left or right
  const moveSelectedItems = (direction) => {
    setList((prev) => {
      const isMovingRight = direction === "right";

      return {
        left: isMovingRight
          ? prev.left.filter((ele) => !move.right.includes(ele))
          : [...prev.left, ...move.left],
        right: isMovingRight
          ? [...prev.right, ...move.right]
          : prev.right.filter((ele) => !move.left.includes(ele)),
      };
    });

    setMove({ left: [], right: [] });
  };

  return (
    <div>
      <div className="container mt-10 mx-auto">
        <h1 className="text-2xl font-semibold text-center">TransferList</h1>

        <div className="flex flex-1">
          <div className="leftbox border border-gray-400 flex flex-1 flex-col p-4">
            {list?.left?.map((item, index) => (
              <Item
                value={item}
                key={index}
                toggleItemSelection={toggleItemSelection}
                direction="left"
                isChecked={move.right.includes(item)}
              />
            ))}
          </div>
          <div className="middle border border-gray-400 flex flex-1 items-center max-w-44 flex-col p-4 ">
            <TransferButton
              moveAllItems={moveAllItems}
              list={list}
              moveSelectedItems={moveSelectedItems}
              move={move}
            />
          </div>
          <div className="rightbox border border-gray-400 flex flex-1 flex-col p-4">
            {list?.right?.map((item, index) => (
              <Item
                value={item}
                key={index}
                toggleItemSelection={toggleItemSelection}
                direction="right"
                isChecked={move.left.includes(item)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransferList;
