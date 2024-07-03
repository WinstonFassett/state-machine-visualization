const KEY = "previous";
export default function reduceLastStateAction(state, action) {
  const copy = { ...state };
  delete copy[KEY];
  return {
    ...state,
    [KEY]: {
      state,
      action
    }
  };
}
