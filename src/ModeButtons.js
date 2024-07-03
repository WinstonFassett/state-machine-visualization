import React from "react";
import { buttonStyles } from "./index";

export default function ModeButtons({ mode, dispatch }) {
  return (
    <>
      {mode && mode.on
        ? Object.keys(mode.on).map((key) => (
            <button
              style={buttonStyles}
              key={key}
              onClick={() => {
                dispatch({ type: key });
              }}
            >
              {key}
            </button>
          ))
        : null}
    </>
  );
}
