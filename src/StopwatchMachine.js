let states = {
  Initial: {
    on: { start: "Running" },
    effects: ["clearInterval", "clearLapse"]
  },
  Running: {
    on: { stop: "Initial", pause: "Idle" },
    effects: ["startInterval"]
  },
  Idle: {
    on: { stop: "Initial", resume: "Running" },
    effects: ["clearInterval"]
  }
};

// TRY UNCOMMENTING THESE LINES
// FOR A COMPLEX EXAMPLE

states = {
  ...states,
  Idle: {
    ...states.Idle,
    on: {
      ...states.Idle.on,
      configure: "Configuring"
    }
  },
  Configuring: { on: { save: "Saving_Config" } },
  Saving_Config: { on: { saved: "Deploying_Config" } },
  Deploying_Config: { on: { deployed: "Resume_or_Restart" } },
  Resume_or_Restart: { on: { resume: "Running", start_over: "Initial" } }
};

const initialContext = { lapse: 0, lapseTime: null };

const effects = {
  startInterval: ({ setContext }) =>
    setContext((context) => {
      let interval = context.interval;
      if (!interval) {
        interval = setInterval(() => {
          setContext((context) => {
            const { lapse } = context;
            const startTime = Date.now();

            const prevTime = context.lapseTime || startTime;
            const lapseTime = Date.now();
            const delta = lapseTime - prevTime;
            return {
              ...context,
              lapse: (lapse || 0) + delta,
              lapseTime
            };
          });
        }, 50);
      }
      return {
        ...context,
        interval
      };
    }),
  clearInterval: ({ setContext }) =>
    setContext((context) => ({
      ...context,
      interval: context.interval ? clearInterval(context.interval) : null,
      lapseTime: null
    })),
  clearLapse: ({ setContext }) =>
    setContext((context) => ({
      ...context,
      lapse: 0
    }))
};

export const reducer = (state, action) => {
  // console.log("reduce", state, action);
  switch (action.type) {
    case "clear":
      state = {
        ...state,
        lapse: 0
      };
      break;
    default:
      break;
  }
  return state;
};

export const StopwatchMachine = {
  initialState: "Initial",
  initialContext,
  states,
  effects,
  reducer
};
