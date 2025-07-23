import { f as flowDb, p as parser$1 } from './flowDb-1972c806-DI_Bo1FO.js';
import { f as flowStyles, g as flowRendererV2 } from './styles-080da4f6-BeXGEbrl.js';
import { t as setConfig } from './index-mermaid-visualizer.js';
import './layout-NdnEVmNz.js';
import './index-2c4b9a3b-DS5mKMkL.js';
import './edges-f2ad444c-BpRunlic.js';
import './createText-62fc7601-ySWu7fSk.js';
import './line-DAtgJdz3.js';
import './array-By75lw5P.js';
import './path-Bt9F_-e8.js';

const diagram = {
  parser: parser$1,
  db: flowDb,
  renderer: flowRendererV2,
  styles: flowStyles,
  init: cnf => {
    if (!cnf.flowchart) {
      cnf.flowchart = {};
    }
    cnf.flowchart.arrowMarkerAbsolute = cnf.arrowMarkerAbsolute;
    setConfig({
      flowchart: {
        arrowMarkerAbsolute: cnf.arrowMarkerAbsolute
      }
    });
    flowRendererV2.setConf(cnf.flowchart);
    flowDb.clear();
    flowDb.setGen("gen-2");
  }
};

export { diagram };
