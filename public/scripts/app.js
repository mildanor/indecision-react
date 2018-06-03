'use strict';

console.log('App js is running');

var visibility = false;

var toggle = function toggle() {
    visibility = !visibility;
    render();
};

var render = function render() {
    var jsx = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility toggle'
        ),
        React.createElement(
            'button',
            { onClick: toggle },
            visibility ? 'Hide details' : 'Show Details'
        ),
        visibility && React.createElement(
            'div',
            null,
            React.createElement(
                'p',
                null,
                'These are some details'
            )
        )
    );

    ReactDOM.render(jsx, document.getElementById('app'));
};

render();

/*
const app ={
    title: 'Visibility Toggle',
    text: "hey"
}

//toggle function
const show = () => {
    show = true;

}



const appRoot = document.getElementById('app');


const renderFormApp = () => {
const template = (
<div>
<h1>{app.title}</h1>
<button onClick={show === false}> Show details</button>
<div id="hi"> {app.text}</div>
</div>
);

ReactDOM.render(template, appRoot);
};

renderFormApp();

*/
