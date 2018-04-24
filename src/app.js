console.log('App js is running');
//app.js in public folder will change automatically for us
//Babel should convert the jsx which browsers doesnt understand

//Task 1: Create app object title/subtitle, title subititle, render
//Task 2:
//1) only render subtitle if it exists with logical &&
//2) if options.length > 0 show "Options" else message "No options" with ternery operator
const object={
    title:'Indecision App ',
    subtitle:'Let computer decide',
    options: ['One', 'Two']
};
//(e) object, fucntions for an event
const onFormSubmit = (e) => {
    //stop page refresh since it's single page app
    e.preventDefault();
    const option = e.target.elements.option.value;
    renderFormApp();

    if (option) {
        object.options.push(option);
        //wipe the value after taking it
        e.target.elements.option.value = '';
        renderFormApp();
    }
};

const remove = () => {
    object.options = [];
    renderFormApp();
}
//create remove all button

const appRoot = document.getElementById('app');

const renderFormApp = () => {
const template = (
<div>
<h1>{object.title}</h1>
{object.subtitle && <p> {object.subtitle}</p>}
<p>{object.options.length > 0 ? "Options are: " : "No options" } </p>
<p>{object.options.length}</p>

<form onSubmit = {onFormSubmit}>
    <input type="text" name="option"/>
    <button>Add option </button>
</form>
<button onClick={remove}> Remove</button>
</div>
);

ReactDOM.render(template, appRoot);
};

renderFormApp();


//react dom events is useful
//create render fucntion that render new jsx, call ir right away and also after the items added