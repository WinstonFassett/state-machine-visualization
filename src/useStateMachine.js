import { useState, useRef } from "react";

export function useStateMachine(
  machine,
  initialState,
  initialContext,
  reducer
) {
  initialState = initialState || machine.initialState;
  const [status, setStatus] = useState(initialState);
  const draftStatus = useRef(initialState);
  const previous = useRef({});
  const [context, setContext] = useState(
    initialContext || machine.initialContext
  );
  const dispatch = (action) => {
    const { states, initialState } = machine;
    const status = draftStatus.current;
    let state = context;
    previous.current = {
      state: status,
      context,
      action
    };
    const mode = states[status] || initialState;
    // console.log("machine action", status, mode, action);
    if (mode.on) {
      const nextStatus = mode.on[action.type];
      if (nextStatus) {
        // console.log("next status", nextStatus);
        draftStatus.current = nextStatus;
        // setState(draftState.current)
        setStatus(nextStatus);
        const nextMode = states[nextStatus];
        if (nextMode) {
          const { effects } = nextMode;
          if (effects) {
            effects.forEach((effect) => {
              if (typeof effect === "string") {
                // console.log("effect", effect);
                effect = machine.effects[effect];
              }
              if (effect) {
                effect({
                  setContext,
                  action,
                  state
                });
              }
            });
          }
        }
      }
      if (machine.reducer) {
        setContext((context) => {
          return machine.reducer(context, action);
        });
      }
      if (reducer) {
        setContext((context) => {
          return reducer(context, action);
        });
      }
    }
  };
  return [{ status, context, previous: previous.current }, dispatch];
}
