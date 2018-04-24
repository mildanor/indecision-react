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

var count = 0;
var addOne = function addOne() {
    count = count + 1;
    //or count++
    renderCounterApp();
};
var minusOne = function minusOne() {
    count = count - 1;
    renderCounterApp();
};
var reset = function reset() {
    count = 0;
    renderCounterApp();
};

var appRoot = document.getElementById('app');

var renderCounterApp = function renderCounterApp() {
    var templateTwo = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Count: ',
            count,
            ' '
        ),
        React.createElement(
            'button',
            { onClick: addOne },
            ' +1 '
        ),
        React.createElement(
            'button',
            { onClick: minusOne },
            ' -1 '
        ),
        React.createElement(
            'button',
            { onClick: reset },
            ' "reset" '
        )
    );
    //run this template (first arguement) in this element (second argument)
    ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
//calling fucntion initialisez the app
