'use strict';

console.log('app.js is running');

var template = (
	<div> 
	<h1>Decision App</h1>
	<p>This is some info</p>
	</div>
	);

var userName = 'Bhaskar';

var anotherTemplate = (
	<div>
	<h1>{userName.toUpperCase() + '!'}</h1>
	<p>JavaScript</p>
	<p>Pune, India</p>
	</div>
	);

var appRoot = document.getElementById('app');

// ReactDOM.render(template, appRoot);
ReactDOM.render(anotherTemplate, appRoot);
