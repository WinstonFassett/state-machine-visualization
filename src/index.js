import ReactDOM from "react-dom";
import React, { useEffect, useState } from "react";
import { useStateMachine } from "./useStateMachine";
import { StopwatchMachine } from "./StopwatchMachine";
import ModeButtons from "./ModeButtons";
import { reduceHistory } from "./reduceHistory";
import StateMachineVisualizer from "./StateMachineVisualizer";
import StateMachineView from "./StateMachineView";
import "./styles.css";
import StateForceGraph from "./StateForceGraph";

function Stopwatch() {
  const [lastAction, setLastAction] = useState();
  const prevState = React.useRef();
  const [{ status, context, previous }, innerDispatch] = useStateMachine(
    StopwatchMachine,
    null,
    null,
    (state, action) => {
      // console.log("action", action);
      setLastAction(action);
      return reduceHistory(state, action);
    }
  );
  useEffect(() => {
    prevState.current = status;
  }, [status]);
  const dispatch = (action) => {
    // console.log("DISPATCH", action);
    // prevState.current = status;
    innerDispatch(action);
  };
  // console.log("last action111", lastAction);
  const { lapse } = context;
  const { states } = StopwatchMachine;
  const mode = states[status] || StopwatchMachine.initialState;
  return (
    <>
      <div className="App">
        <div style={{ textAlign: "center" }}>
          <label
            style={{
              fontSize: "5em",
              display: "block"
            }}
          >
            {lapse} ms
          </label>
          <div>{status}</div>
          <ModeButtons {...{ mode, dispatch }} />
          <div>
            <StateForceGraph
              value={status}
              mode={mode}
              lastEvent={previous.action}
              prevState={previous.state}
              definition={StopwatchMachine}
              dispatch={dispatch}
            />
          </div>
          <StateMachineVisualizer
            value={status}
            definition={StopwatchMachine}
          />
          <StateMachineView
            value={status}
            definition={StopwatchMachine}
            dispatch={dispatch}
          />
          {/* previous={JSON.stringify(previous)} */}
        </div>
        <pre>{JSON.stringify({ status, context }, null, 2)}</pre>
      </div>
    </>
  );
}

export const buttonStyles = {
  border: "1px solid #ccc",
  background: "#fff",
  fontSize: "2em",
  padding: 15,
  margin: 5,
  width: 200
};

export default Stopwatch;

const rootElement = document.getElementById("root");
ReactDOM.render(<Stopwatch />, rootElement);
