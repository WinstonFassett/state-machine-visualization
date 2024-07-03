export function reduceHistory(state, action) {
  const history = [
    ...(state.history || []),
    // { state, action }
    action.type
  ];

  return {
    ...state,
    history
  };
}
