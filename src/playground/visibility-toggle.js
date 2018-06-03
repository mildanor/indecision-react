console.log('App js is running');

let visibility = false;

const toggle = () => {
visibility = !visibility;
render();
};

const render = () => {
    const jsx = (
        <div>
        <h1>Visibility toggle</h1>
        <button onClick={toggle}> 
        {visibility ? 'Hide details' : 'Show Details'}
        </button>
        {visibility && (
            <div>
            <p>These are some details</p>
            </div>
        )}
        </div>
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