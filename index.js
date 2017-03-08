const Koa = require('koa');
const app = new Koa();
const React = require('react');
const ReactDom = require('react-dom');
const  renderToString  = require('react-dom/server');

import createLogger from 'concurrency-logger';
import { Button } from 'antd';

import routes from './routes';

import HelloMessage from './index/index'

const logger = createLogger(/* options */);

app.use(logger);

app.use(ctx => {
  ctx.body =renderToString.renderToString(<HelloMessage name="xx"/>);
});

app.listen(3000);
console.log("http://127.0.0.1:3000")
