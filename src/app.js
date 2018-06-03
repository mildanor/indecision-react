console.log('App js is running');
//app.js in public folder will change automatically for us
//Babel should convert the jsx which browsers doesnt understand

const object={
    title:'Indecision App ',
    subtitle:'Let computer decide',
    options: []
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

//create remove all button
const remove = () => {
    object.options = [];
    renderFormApp();
}

//make a decision function
const MakeDecision = () => {
    const randomNum = Math.floor(Math.random() * object.options.length);
    const optionSelected = object.options[randomNum];
    alert(optionSelected);
}


const appRoot = document.getElementById('app');


const renderFormApp = () => {
const template = (
<div>
<h1>{object.title}</h1>
{object.subtitle && <p> {object.subtitle}</p>}
<p>{object.options.length > 0 ? "Options are: " : "No options" } </p>

<ol>
{
    //Challenge: map over object.options
    object.options.map((option) => {
        return <li key={option}>Option: {option} </li>
        renderFormApp();
    })
}
</ol>

<form onSubmit = {onFormSubmit}>
    <input type="text" name="option"/>
    <button>Add option </button>
</form>
<button disabled={object.options.length === 0} onClick={MakeDecision}> What should I do? </button>
<button onClick={remove}> Remove</button>
</div>
);

ReactDOM.render(template, appRoot);
};

renderFormApp();


//react dom events is useful
//create render fucntion that render new jsx, call ir right away and also after the items added