import { initialState } from '../initialState/initialState';
import { settings, settingsReducerPayload } from '../types/storeTypes';

const settingsReducer = (
  state = initialState,
  action: {
    type: string;
    payload: settingsReducerPayload;
  }
): typeof initialState => {
  switch (action.type) {
    case settings.UPDATE_SETTINGS: {
      const { quantity, maxCount, whosTurn } = action.payload;
      if (quantity && quantity >= 2) {
        return {
          ...state,
          quantity: quantity ?? state.quantity,
          maxCount: maxCount ?? state.maxCount,
          whosTurn: whosTurn ?? state.whosTurn,
        };
      }
      if (maxCount && maxCount <= state.quantity) {
        return {
          ...state,
          quantity: quantity ?? state.quantity,
          maxCount: maxCount,
          whosTurn: whosTurn ?? state.whosTurn,
        };
      }
      return {
        ...state,
        quantity: state.quantity,
        maxCount: state.maxCount,
        whosTurn: whosTurn ?? state.whosTurn,
      };
    }

    default:
      return state;
  }
};

export default settingsReducer;
