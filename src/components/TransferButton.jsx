import React from "react";

const TransferButton = ({ moveAllItems, list, moveSelectedItems, move }) => {
  return (
    <>
      <button
        className="my-1 bg-gray-300 hover:bg-gray-400 text-gray-800 border border-gray-400 w-10 disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={() => moveAllItems("left")}
        disabled={list.right.length === 0}
      >
        {"<<"}
      </button>
      <button
        className="my-1 bg-gray-300 hover:bg-gray-400 text-gray-800 border border-gray-400 w-10 disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={() => moveSelectedItems("left")}
        disabled={move.left.length === 0}
      >
        {"<"}
      </button>
      <button
        className="my-1 bg-gray-300 hover:bg-gray-400 text-gray-800 border border-gray-400 w-10 disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={() => moveSelectedItems("right")}
        disabled={move.right.length === 0}
      >
        {">"}
      </button>
      <button
        className="my-1 bg-gray-300 hover:bg-gray-400 text-gray-800 border border-gray-400 w-10 disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={() => moveAllItems("right")}
        disabled={list.left.length === 0}
      >
        {">>"}
      </button>
    </>
  );
};

export default TransferButton;
