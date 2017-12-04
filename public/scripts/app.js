'use strict';

console.log('app.js is running');

var template = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		'Decision App'
	),
	React.createElement(
		'p',
		null,
		'This is some info'
	)
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
