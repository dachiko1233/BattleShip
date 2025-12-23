import React from 'react';

export default function Battle() {
  return <div></div>;
}
/* 1 Board and cell*/
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

// 2 ships
function createShip(id, size) {
  return {
    id,
    size,
    cell: [],
    hits: 0,
    sunk: false,
  };
}

const initialShips = [
  createShip('CA', 5),
  createShip('B', 4),
  createShip('C', 3),
  createShip('S', 3),
  createShip('D', 2),
];

// 3 Game State

const initialGame = {
  boards: {
    playerBoard: createBoard(),
    enemyBoard: createBoard(),
  },

  ships: {
    player: structuredClone(initialShips),
    enemy: structuredClone(initialShips),
  },

  meta: {
    phase: 'placing',
    trun: 'player',
    winner: null,
    iastAction: '',
  },
};

// 4 ship placement

function placeShip(board, ship, startR, startC, horizontal = true) {
  const cells = [];

  for (let i = 0; i < ship.size; i++) {
    const r = horizontal ? startR : startR + i;
    const c = horizontal ? startC + i : startC;

    if (r >= BOARD_SIZE || c >= BOARD_SIZE || board[r][c].hasShip) {
      return false;
    }
    cells.push({ r, c });
  }

  //place ship
  cells.forEach(({ r, c }) => {
    board[r][c].hasShip = true;
    board[r][c].shipId = ship.id;
  });

  ship.cells = cells;
  return true;
}

//5 shoot

function shoot(board, ships, r, c) {
  const cell = board[r][c];

  if (cell.shot) {
    return { result: 'already' };
  }

  cell.shot = true;

  if (!cell.hasShip) {
    return { result: 'miss' };
  }

  const ship = ships.find((s) => s.id === cell.shipId);
  ship.hits += 1;

  if (ship.hits === ship.size) {
    ship.sunk = true;
    return { result: 'sunk', shipId: ship.id };
  }

  return { result: 'hit', shipId: ship.id };
}

// 6 victoty check

function allShipsSunk(ships) {
  return ships.every((ship) => ship.sunk);
}

//7 turn handler

function handleShot(gameState, r, c) {
  const { boards, ships, meta } = gameState;

  const targetBoard =
    meta.turn === 'player' ? boards.enemyBoard : boards.playerBoard;

  const targetShips = meta.turn === 'player' ? ships.enemy : ships.player;

  const result = shoot(targetBoard, targetShips, r, c);

  if (result.result === 'miss') {
    meta.turn = meta.turn === 'player' ? 'enemy' : 'player';
    meta.lastAction = 'Miss!';
  }

  if (result.result === 'hit') {
    meta.lastAction = 'Hit';
  }

  if (allShipsSunk(targetShips)) {
    meta.phase = 'gameOver';
    meta.winner = meta.turn;
    meta.lastAction = `${meta.turn} wins! `;
  }
}
