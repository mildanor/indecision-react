'use strict';

console.log('App js is running');
//app.js in public folder will change automatically for us
//Babel should convert the jsx which browsers doesnt understand
var template = React.createElement(
  'p',
  null,
  'Title'
);
var appRoot = document.getElementById('app');

//run this template (forst arguement) in this element (second argument)
ReactDOM.render(template, appRoot);
