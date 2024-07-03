import React, { useEffect, useState } from "react";
import mermaid from "mermaid";
mermaid.initialize({
  // startOnLoad: true
});

const Mermaid = ({ chart }) => {
  let node;

  useEffect(() => {
    // console.log('rendering', chart)
    mermaid.contentLoaded();
    node.removeAttribute("data-processed");
    // console.log('rendered')
  }, [chart]);
  if (!chart) return null;
  return (
    <div ref={(e) => (node = e)} className="mermaid">
      {chart}
    </div>
  );
};

function toDiagram(definition, value, callbackName) {
  const rows = [];
  Object.keys(definition.states || {}).forEach((key) => {
    const state = definition.states[key];
    // console.log("state", key, state);
    const ifactive = key === value ? ":::active" : "";
    rows.push(["    ", key, ifactive].join(""));
    if (state.on) {
      Object.keys(state.on).forEach((event) => {
        // console.log("event", event);
        const target = state.on[event];

        rows.push(`    ${key}-->|${event}| ${target}[${target}]`);
      });
    }
    // rows.push(["   ", "click", key, callbackName].join(" "));
  });
  const output = `
graph LR
${rows.join("\n")}
    classDef active fill:aquamarine;
`;
  return output;
}

export default function StateMachineVisualizer({ definition, value }) {
  //const [id] = useState(uuid.v4())
  const id = "mermaidCallback";
  window[id] = (...args) => {
    console.log("callback", args);
  };
  const diagram = toDiagram(definition, value, id);
  return (
    <>
      <Mermaid chart={diagram} />
      {/*<pre>{diagram}</pre>*/}
      {/*<pre>{JSON.stringify(definition, null, 2)}</pre>*/}
    </>
  );
}
