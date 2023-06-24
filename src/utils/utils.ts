import { players } from './../store/types/storeTypes';
export const calculateQuantity = (value: number) => value * 2 + 1;
export const aiLogic = (stateLength: number, maxPick: number): number => {
  if (stateLength === 0) {
    return 0;
  }

  const calculateMove = (divisor: number): number => {
    for (let i = 1; i <= maxPick; ++i) {
      if ((stateLength - i) % (divisor + 1) <= 1) {
        return i;
      }
    }
    return 1;
  };

  if (maxPick % 2 !== 0) {
    return calculateMove(maxPick + 1);
  } else {
    return calculateMove(maxPick / 2 + 1);
  }
};

export const whoWinner = (playerScore: number, aiScore: number) => {
  if (playerScore % 2 === 0) {
    return players.PLAYER;
  }
  if (aiScore % 2 === 0) {
    return players.AI;
  }
  return 'draw';
};
