'use strict';

console.log('app.js is running');

var template = React.createElement(
  'h1',
  { id: 'someid' },
  'This is JSX expression'
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);