'use strict';

console.log('app.js is running');


const app = {
	title: 'Decision App',
	subTitle: 'This is deicision app.',
	options: ['one', 'two']
};


const template = (
	<div> 
	<h1>{app.title}</h1>
	{app.subTitle && <p>app.subTitle</p>}
	<p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
		<ol>
		<li>One</li>
		<li>Two</li>
	</ol>
	</div>
	);

const userData = {
	name: 'Bhaskar',
	age: 25,
	location: 'Pune, India'
};

function getLocation(location){
	if(location){
		return <p>Location - {location}</p>;
	}
}

const anotherTemplate = (
	<div>
	<h1>{userData.name ? userData.name : 'Anonymous'}</h1>
	{(userData.age && userData.age >= 18) && <p> Age - {userData.age}</p>}
	{getLocation(userData.location)}
	</div>
	);

const appTemplate = (
	<div>
	<h1>{app.title}</h1>
	<p>{app.subTitle}</p>
	</div>
	);

const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
// ReactDOM.render(anotherTemplate, appRoot);
// ReactDOM.render(appTemplate, appRoot);
