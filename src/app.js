'use strict';

console.log('app.js is running');

var template = (
	<div> 
	<h1>Decision App</h1>
	<p>This is some info</p>
	</div>
	);

var userName = 'Bhaskar';
var userSkill = 'JavaScript';
var userLocation = 'Pune, India';

var anotherTemplate = (
	<div>
	<h1>Name - {userName.toUpperCase() + '!'}</h1>
	<p>Skill - {userSkill}</p>
	<p>Location - {userLocation}</p>
	</div>
	);

var appRoot = document.getElementById('app');

// ReactDOM.render(template, appRoot);
ReactDOM.render(anotherTemplate, appRoot);
