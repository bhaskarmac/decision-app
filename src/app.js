'use strict';

console.log('app.js is running');
var app = {
	title: 'Decision App',
	subTitle: 'This is deicision app.'
}
var template = (
	<div> 
	<h1>Decision App</h1>
	<p>This is some info</p>
	</div>
	);

var userData = {
	name: 'Bhaskar',
	skill: 'JavaScript',
	location: 'Pune, India'
}

var anotherTemplate = (
	<div>
	<h1>Name - {userData.name.toUpperCase() + '!'}</h1>
	<p>Skill - {userData.skill}</p>
	<p>Location - {userData.location}</p>
	</div>
	);

var appTemplate = (
	<div>
		<h1>{app.title}</h1>
		<p>{app.subTitle}</p>
	</div>
	);

var appRoot = document.getElementById('app');

// ReactDOM.render(template, appRoot);
// ReactDOM.render(anotherTemplate, appRoot);
ReactDOM.render(appTemplate, appRoot);
