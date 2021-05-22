import produce from "immer";

import {
  INCREASE_ACTION,
  DECREASE_ACTION,
  SET_ACTION,
} from "../actions/countActions";

const initialState = {
  count: 0,
};

const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE_ACTION: {
      return produce(state, function (draft) {
        draft.count += 1;
      });
    }

    case DECREASE_ACTION: {
      return produce(state, function (draft) {
        draft.count -= 1;
      });
    }

    case SET_ACTION: {
      let value = action.payload;
      return produce(state, function (draft) {
        draft.count = value;
      });
    }

    default: {
      return state;
    }
  }
};

export { countReducer };
