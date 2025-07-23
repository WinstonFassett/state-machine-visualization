import React from "react";

export default function StateMachineView({ definition, value, dispatch }) {
  const mode = definition.states[value];

  const steps = Object.keys(definition.states).map((key) => {
    const mode = definition.states[key];
    const active = value === key;
    const events =
      mode &&
      mode.on &&
      Object.keys(mode.on).map((key) => {
        return (
          <div key={key}>
            <button
              key={key}
              style={eventStyle}
              disabled={!active}
              onClick={() => {
                dispatch({ type: key });
              }}
            >
              {key}
            </button>{" "}
            → {mode.on[key]}
          </div>
        );
      });
    return (
      <div
        key={key}
        style={{
          ...stateStyle,
          backgroundColor: active ? "aquamarine" : "#ccc"
        }}
      >
        <div style={{ fontWeight: "bold" }}>{key}</div>
        {mode && mode.effects && <small>{mode.effects.join(", ")}</small>}
        <div style={eventsStyle}>{events}</div>
      </div>
    );
  });

  return <div style={containerStyle}>{steps}</div>;
}

const containerStyle = {
  padding: 10,
  display: "flex"
};
const stateStyle = {
  padding: 10,
  margin: 10,
  borderRadius: 10,
  borderWidth: 1,
  borderStyle: "solid"
};
const eventsStyle = {
  // display: "flex",
  // flexDirection: "column"
  textAlign: "left"
};
const eventStyle = {
  // border: "none",
  // color: "blue",
  // background: "none"
  marginBottom: 2
};
