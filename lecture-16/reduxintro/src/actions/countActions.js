export const INCREASE_ACTION = "@count/increase";
export const DECREASE_ACTION = "@count/decrease";

export function increase() {
  return { type: INCREASE_ACTION };
}

export function decrease() {
  return { type: DECREASE_ACTION };
}
