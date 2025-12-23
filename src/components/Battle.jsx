import React from 'react';

export default function Battle() {
  return <div></div>;
}
/* Board and cell*/
const BOARD_SIZE = 10;
// cell
function createCell() {
  return {
    hasShip: false,
    shot: false,
    shipId: null,
  };
}

// Board
function createBoard() {
  return Array.from({ length: BOARD_SIZE }, () =>
    Array.from({ length: BOARD_SIZE }, () => createCell()),
  );
}
