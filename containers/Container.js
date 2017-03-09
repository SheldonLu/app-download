import React from 'react';

const Container = (props) =>
  <html lang="en">
    <head>
      <title>Hello Container</title>
      <link  href="/antd/dist/antd.css" media="all" rel="stylesheet"/>
    </head>
    <body>
      <div id="app">
        {props.children}
      </div>
    </body>
    <script src="/js/bundle.js"></script>
  </html>;

export default Container;
