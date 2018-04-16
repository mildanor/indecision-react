console.log('App js is running');

//Babel should convert the jsx which browsers doesnt understand
var template = <p>This is jsx</p>;
var appRoot = document.getElementById('app';

//run this template (forst arguement) in this element (second argument)
ReactDOM.render(template, appRoot);