import React from "react";
import { lang } from "../data.js";

const Item = ({ value, toggleItemSelection, direction, isChecked }) => {
  const item = lang[value];

  if (!item) {
    return null;
  }

  return (
    <div className="my-1">
      <input
        type="checkbox"
        id={item.id}
        className="mr-2"
        checked={isChecked} // Control checked state
        onChange={() => toggleItemSelection(value, direction)}
      />
      <label htmlFor={item.id}>{item.name.toUpperCase()}</label>
    </div>
  );
};

export default Item;
