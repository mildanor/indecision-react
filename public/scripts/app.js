'use strict';

console.log('App js is running');
//app.js in public folder will change automatically for us
//Babel should convert the jsx which browsers doesnt understand

//Task 1: Create app object title/subtitle, title subititle, render
//Task 2:
//1) only render subtitle if it exists with logical &&
//2) if options.length > 0 show "Options" else message "No options" with ternery operator
var object = {
    title: 'Indecision App ',
    subtitle: 'Let computer decide',
    options: ['One', 'Two']
};
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        object.title
    ),
    object.subtitle && React.createElement(
        'p',
        null,
        ' ',
        object.subtitle
    ),
    React.createElement(
        'p',
        null,
        object.options.length > 0 ? "Options are: " : "No options",
        ' '
    )
);

/*
Inject data
var userName = Milda;
var userAge = 27;
var userLocation = 'Vilnius';
*/
//true ? 'Milda : 'Anonymous - second is if condition doesnt pass
//or you can have an object
var user = {
    name: 'Milda',
    age: 26,
    location: 'Geneva'
};
function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'Location: ',
            location
        );
    }
}

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name ? user.name.toUpperCase() : 'Anonymous'
    ),
    user.age && user.age >= 18 && React.createElement(
        'p',
        null,
        ' Age: ',
        user.age
    ),
    getLocation(user.location)
);
var appRoot = document.getElementById('app');

//run this template (first arguement) in this element (second argument)
ReactDOM.render(template, appRoot);
