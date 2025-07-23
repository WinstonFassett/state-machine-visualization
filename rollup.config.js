import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import postcss from 'rollup-plugin-postcss';

const plugins = [
  resolve(),
  babel({
    presets: ['@babel/preset-react'],
    babelHelpers: 'bundled'
  }),
  commonjs(),
  postcss({
    extract: true,
    modules: false,
    use: ['sass'],
  }),
  replace({
    'process.env.NODE_ENV': JSON.stringify('production'),
    preventAssignment: true
  })
];

export default [
  {
    input: 'src/index-force-graph.js',
    output: {
      file: 'dist/state-force-graph.js',
      format: 'umd',
      name: 'StateForceGraph',
    },
    plugins,
  },
  {
    input: 'src/index-basic-visualizer.js',
    output: {
      file: 'dist/basic-visualizer.js',
      format: 'umd',
      name: 'BasicVisualizer',
    },
    plugins,
  },
  {
    input: 'src/index-mermaid-visualizer.js',
    output: {
      dir: 'dist/mermaid-visualizer',
      format: 'es',
    },
    plugins,
  },
];
