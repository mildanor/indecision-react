'use strict';

console.log('App js is running');
//app.js in public folder will change automatically for us
//Babel should convert the jsx which browsers doesnt understand

var object = {
    title: 'Indecision App ',
    subtitle: 'Let computer decide',
    options: ['One', 'Two']
};
//(e) object, fucntions for an event
var onFormSubmit = function onFormSubmit(e) {
    //stop page refresh since it's single page app
    e.preventDefault();
    var option = e.target.elements.option.value;
    renderFormApp();

    if (option) {
        object.options.push(option);
        //wipe the value after taking it
        e.target.elements.option.value = '';
        renderFormApp();
    }
};

//create remove all button
var remove = function remove() {
    object.options = [];
    renderFormApp();
};

var appRoot = document.getElementById('app');

var renderFormApp = function renderFormApp() {
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
        ),
        React.createElement(
            'ol',
            null,

            //Challenge: map over object.options
            object.options.map(function (option) {
                return React.createElement(
                    'li',
                    { key: option },
                    'Option: ',
                    option,
                    ' '
                );
                renderFormApp();
            })
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add option '
            )
        ),
        React.createElement(
            'button',
            { onClick: remove },
            ' Remove'
        )
    );

    ReactDOM.render(template, appRoot);
};

renderFormApp();

//react dom events is useful
//create render fucntion that render new jsx, call ir right away and also after the items added
