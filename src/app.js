'use strict';

console.log('app.js is running');

var template = (
	<div> 
	<h1>Decision App</h1>
	<p>This is some info</p>
	</div>
	);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);