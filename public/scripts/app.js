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

var userData = {
	name: 'Bhaskar',
	skill: 'JavaScript',
	location: 'Pune, India'
};

var anotherTemplate = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		'Name - ',
		userData.name.toUpperCase() + '!'
	),
	React.createElement(
		'p',
		null,
		'Skill - ',
		userData.skill
	),
	React.createElement(
		'p',
		null,
		'Location - ',
		userData.location
	)
);

var appRoot = document.getElementById('app');

// ReactDOM.render(template, appRoot);
ReactDOM.render(anotherTemplate, appRoot);
