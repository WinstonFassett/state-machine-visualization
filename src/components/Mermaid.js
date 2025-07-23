import React, { useState, useEffect, useMemo, useRef, forwardRef } from 'react';
import mermaid from 'mermaid';
import './mermaid.css';
// Initialize Mermaid
const useMermaid = (id, content) => {
    const [svg, setSvg] = useState(null);
    useEffect(() => {
        let isCancelled = false;
        mermaid.mermaidAPI.render(id, content).then(svgraph => {
            if (!isCancelled) {
                setSvg(svgraph.svg);
            }
        });
        return () => {
            isCancelled = true;
        };
    }, [id, content]);
    return svg;
};
let lastId = 0;
export const Mermaid = React.memo(({ diagram, onRender }) => {
    const id = useMemo(() => `mermaid-${++lastId}`, []);
    const elRef = useRef(null);
    const svg = useMermaid(id, diagram);
    useEffect(() => {
        if (svg && onRender) {
            onRender === null || onRender === void 0 ? void 0 : onRender(elRef.current);
        }
    }, [svg]);
    if (!svg)
        return React.createElement("div", null, "Loading...");
    return React.createElement("div", null,
        React.createElement(InlineSvg, { svg: svg, ref: elRef }));
});
const InlineSvg = React.memo(forwardRef(({ svg }, ref) => {
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
    useEffect(() => {
        const viewBoxMatch = svg === null || svg === void 0 ? void 0 : svg.match(/viewBox="(-?\d*\.?\d+\s+-?\d*\.?\d+\s+-?\d*\.?\d+\s+-?\d*\.?\d+)"/);
        if (viewBoxMatch && viewBoxMatch[1]) {
            const [, , width, height] = viewBoxMatch[1].split(/\s+/).map(Number);
            setDimensions({ width, height });
        }
    }, [svg]);
    return React.createElement("div", { ref: ref, style: {
            minHeight: `${dimensions.height}px`,
        }, dangerouslySetInnerHTML: { __html: svg } });
}));
export default Mermaid;