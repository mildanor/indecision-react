'use strict';

console.log('App js is running');
//app.js in public folder will change automatically for us
//Babel should convert the jsx which browsers doesnt understand

//Taks: Create app object title/subtitle, title subititle, render
var object = {
    title: 'Indecision App ',
    subtitle: 'Let computer decide'
};
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        object.title
    ),
    React.createElement(
        'p',
        null,
        object.subtitle
    ),
    React.createElement(
        'p',
        null,
        'static data example'
    )
);

/*
Inject data
var userName = Milda;
var userAge = 27;
var userLocation = 'Vilnius';
*/

//or you can have an object
var user = {
    name: 'Milda',
    age: 26,
    location: 'Geneva',
    food: 'pizza'
};
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name.toUpperCase()
    ),
    React.createElement(
        'p',
        null,
        'Age:',
        user.age
    ),
    React.createElement('ol', null),
    React.createElement(
        'li',
        null,
        user.location
    ),
    React.createElement(
        'li',
        null,
        user.food
    )
);
var appRoot = document.getElementById('app');

//run this template (first arguement) in this element (second argument)
ReactDOM.render(template, appRoot);
