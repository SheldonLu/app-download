const Koa = require('koa');
const app = new Koa();
const serve = require('koa-static');
//const React = require('react');
//const ReactDom = require('react-dom');

//const  renderToString  = require('react-dom/server');直接输出组件HTML

import createLogger from 'concurrency-logger';
// import { Button } from 'antd';
import reactrouter from 'koa-react-router';
import routes from './routes';
import Container from './containers/Container'

// import HelloMessage from './index/index'

const logger = createLogger(/* options */);

app.use(logger);

app.use(serve('./node_modules'));
app.use(serve('./dist'));
app.use(reactrouter({
    routes,
    onError: (ctx, err) => console.log('I Have failed!!!!'),
    onRedirect: (ctx, redirect) => console.log('I have redirected!'),
    onNotFound: (ctx) => console.log('Not Found!!!'),
    onRender: (ctx) => ({Container}),
  }));



app.listen(3000);
console.log("http://127.0.0.1:3000")
