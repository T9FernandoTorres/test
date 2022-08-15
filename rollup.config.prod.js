const path = require('path')
const resolve = require('rollup-plugin-node-resolve')
const commonjs = require('rollup-plugin-commonjs')
const babel = require('rollup-plugin-babel')
const json = require('rollup-plugin-json')
const {terser} = require('rollup-plugin-terser')
const vue = require('rollup-plugin-vue')
const postcss = require('rollup-plugin-postcss')

const inputPath = path.resolve(__dirname, './src/index.js')
const outputUmdPath = path.resolve(__dirname,'./dist/torres.datav.js')
const outputEsPath = path.resolve(__dirname,'./dist/torres.datav.es.min.js')
console.log(inputPath);
module.exports = {
  input:inputPath,
  output:[{
    file: outputUmdPath,
    format:'umd',  
    // umd 模块导出的是JS的函数  cjs  commonjs模块   es   es模块
    name:'torresDatav',
    globals:{
      'vue': 'vue'
    }
  },{
    file: outputEsPath,
    format:'es',  
    // umd 模块导出的是JS的函数  cjs  commonjs模块   es   es模块
  }],
  plugins:[
    vue(),
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**'  // 指定哪个文件不进行编译
    }),
    json(),  // 识别json
    postcss({
      plugins:[]
    }),
    terser(),   // 压缩代码
  ],
  external: [
    'vue'
  ]
}