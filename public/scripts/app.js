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

var userName = 'Bhaskar';

var anotherTemplate = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		userName.toUpperCase() + '!'
	),
	React.createElement(
		'p',
		null,
		'JavaScript'
	),
	React.createElement(
		'p',
		null,
		'Pune, India'
	)
);

var appRoot = document.getElementById('app');

// ReactDOM.render(template, appRoot);
ReactDOM.render(anotherTemplate, appRoot);
