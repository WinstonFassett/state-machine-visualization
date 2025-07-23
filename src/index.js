import ReactDOM from "react-dom";
import React, { useEffect, useState } from "react";
import { useStateMachine } from "./useStateMachine";
import { StopwatchMachine } from "./StopwatchMachine";
import ModeButtons from "./ModeButtons";
import { reduceHistory } from "./reduceHistory";
import { useStateMachine } from "./useStateMachine";
import { StopwatchMachine } from "./StopwatchMachine";
import ModeButtons from "./ModeButtons";
import { reduceHistory } from "./reduceHistory";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./index-force-graph.js";
import "./index-basic-visualizer.js";
import "./index-mermaid-visualizer.js";
import "./styles.css";

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
  const graphRef = React.useRef();
  const basicRef = React.useRef();

  useEffect(() => {
    const graph = graphRef.current;
    if (graph) {
      const handleEdgeClick = (e) => {
        dispatch(e.detail);
      };
      graph.addEventListener("edge-click", handleEdgeClick);
      return () => {
        graph.removeEventListener("edge-click", handleEdgeClick);
      };
    }
  }, [graphRef.current]);

  useEffect(() => {
    const basic = basicRef.current;
    if (basic) {
      const handleDispatch = (e) => {
        dispatch(e.detail);
      };
      basic.addEventListener("dispatch", handleDispatch);
      return () => {
        basic.removeEventListener("dispatch", handleDispatch);
      };
    }
  }, [basicRef.current]);

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
            <state-force-graph
              ref={graphRef}
              value={status}
              prev-state={previous.state}
              last-event={JSON.stringify(previous.action)}
              definition={JSON.stringify(StopwatchMachine)}
              style={{
                '--node-color': 'grey',
                '--active-node-color': 'blue',
                '--link-color': 'lightgrey',
                '--active-link-color': 'blue',
                '--transition-color': 'green',
                '--particle-color': 'green',
              }}
            ></state-force-graph>
          </div>
          <mermaid-visualizer
            definition={JSON.stringify(StopwatchMachine)}
            value={status}
          ></mermaid-visualizer>
          <basic-visualizer
            ref={basicRef}
            definition={JSON.stringify(StopwatchMachine)}
            value={status}
          ></basic-visualizer>
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
