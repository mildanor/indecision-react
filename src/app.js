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
const template = (
<div>
<h1>{object.title}</h1>
{object.subtitle && <p> {object.subtitle}</p>}
<p>{object.options.length > 0 ? "Options are: " : "No options" } </p>
</div>
);

let count = 0;
const addOne = () => {
    count = count + 1;
    //or count++
    renderCounterApp();
}
const minusOne = () => {
    count = count - 1;
    renderCounterApp();
}
const reset = () => {
    count = 0;
    renderCounterApp();
}

const appRoot = document.getElementById('app');

const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count} </h1>
            <button onClick={addOne}> +1 </button>
            <button onClick={minusOne}> -1 </button>
            <button onClick={reset}> "reset" </button>
        </div>
    );
    //run this template (first arguement) in this element (second argument)
ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
//calling fucntion initialisez the app