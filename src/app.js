console.log('App js is running');
//app.js in public folder will change automatically for us
//Babel should convert the jsx which browsers doesnt understand

//Taks: Create app object title/subtitle, title subititle, render
var object={
    title:'Indecision App ',
    subtitle:'Let computer decide',
}
var template = (
<div>
<h1>{object.title}</h1>
<p>{object.subtitle}</p>
<p>static data example</p>
</div>
);


/*
Inject data
var userName = Milda;
var userAge = 27;
var userLocation = 'Vilnius';
*/

//or you can have an object
var user={
    name:'Milda',
    age:26,
    location:'Geneva',
    food:'pizza'
}
var templateTwo = (
    <div>
        <h1>{user.name.toUpperCase()}</h1>
        <p>Age:{user.age}</p>
        <ol></ol>
        <li>{user.location}</li>
        <li>{user.food}</li>
        </div>
    );
var appRoot = document.getElementById('app');

//run this template (first arguement) in this element (second argument)
ReactDOM.render(template, appRoot);