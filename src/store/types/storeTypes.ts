export enum settings {
  UPDATE_SETTINGS = 'UPDATE_SETTINGS',
}
export enum players {
  PLAYER = 'PLAYER',
  AI = 'AI',
}

export type settingsReducerPayload = {
  quantity?: number;
  maxCount?: number;
  whosTurn?: players;
};
