let buttons = document.querySelectorAll('.btn');
const body = document.querySelector('body');
let title = document.querySelector('#heading');


buttons.forEach( (button) => {
    // console.log(button);
    button.addEventListener('click', (e)=> {
        // console.log(e);
        // console.log(e.target);

        if(e.target.id === 'white'){
            body.style.backgroundColor = e.target.id;
            title.innerHTML = `Hi, I'm ${e.target.id.toUpperCase()}.`;
            title.style.color = 'black';
        }
        if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id;
            title.innerHTML = `Hi, I'm ${e.target.id.toUpperCase()}.`;
            title.style.color = 'white';
        }
        if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id;
            title.innerHTML = `Hi, I'm ${e.target.id.toUpperCase()}.`;
            title.style.color = 'black';
        }
        if(e.target.id === 'black'){
            body.style.backgroundColor = e.target.id;
            title.innerHTML = `Hi, I'm ${e.target.id.toUpperCase()}.`;
            title.style.color = 'white';
        }
        if(e.target.id === 'purple'){
            body.style.backgroundColor = e.target.id;
            title.innerHTML = `Hi, I'm ${e.target.id.toUpperCase()}.`;
            title.style.color = 'white';
        }
        if(e.target.id === 'red'){
            body.style.backgroundColor = e.target.id;
            title.innerHTML = `Hi, I'm ${e.target.id.toUpperCase()}.`;
            title.style.color = 'white';
        }
    })
})