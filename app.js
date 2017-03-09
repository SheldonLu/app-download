
require('babel-register');//支持import ES6 等语法，JSX
require("babel-polyfill");// regeneratorRuntime is not defined 后增加该项
require('./index');
