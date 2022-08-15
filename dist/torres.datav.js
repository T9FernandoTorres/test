(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.torresDatav = factory());
})(this, (function () { 'use strict';

  function random(base) {
    if (base && base % 1 === 0) {
      return Math.floor(Math.random() * base);
    } else {
      return 0;
    }
  }

  var name = "datav-libs-dev";
  var version = "1.0.0";
  var description = "torres datav components library";
  var main = "index.js";
  var scripts = {
  	dev: "rollup -wc rollup.config.dev.js",
  	build: "rollup -c rollup.config.dev.js",
  	"build:prod": "rollup -c rollup.config.prod.js"
  };
  var keywords = [
  ];
  var author = "sugar<1092366595@qq.com>";
  var license = "ISC";
  var devDependencies = {
  	"@babel/preset-env": "^7.18.10",
  	rollup: "^2.78.0",
  	"rollup-plugin-babel": "^4.4.0",
  	"rollup-plugin-commonjs": "^10.1.0",
  	"rollup-plugin-json": "^4.0.0",
  	"rollup-plugin-node-resolve": "^5.2.0",
  	"rollup-plugin-terser": "^7.0.2",
  	"sam-test-data": "^0.0.5"
  };
  var pkg = {
  	name: name,
  	version: version,
  	description: description,
  	main: main,
  	scripts: scripts,
  	keywords: keywords,
  	author: author,
  	license: license,
  	devDependencies: devDependencies
  };

  console.log(random(100));
  console.log(pkg);

  return random;

}));
