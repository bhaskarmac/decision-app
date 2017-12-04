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
var userSkill = 'JavaScript';
var userLocation = 'Pune, India';

var anotherTemplate = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		'Name - ',
		userName.toUpperCase() + '!'
	),
	React.createElement(
		'p',
		null,
		'Skill - ',
		userSkill
	),
	React.createElement(
		'p',
		null,
		'Location - ',
		userLocation
	)
);

var appRoot = document.getElementById('app');

// ReactDOM.render(template, appRoot);
ReactDOM.render(anotherTemplate, appRoot);
