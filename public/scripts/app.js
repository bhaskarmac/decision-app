'use strict';

console.log('app.js is running');

var template = React.createElement(
  'h1',
  null,
  'Decision App'
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
