export const INCREASE_ACTION = "@count/increase";
export const DECREASE_ACTION = "@count/decrease";
export const SET_ACTION = "@count/set";

export function increase() {
  return { type: INCREASE_ACTION };
}

export function decrease() {
  return { type: DECREASE_ACTION };
}

export function setValue(value) {
  return { type: SET_ACTION, payload: value };
}
