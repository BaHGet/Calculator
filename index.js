let btns = document.querySelector('#btn1');
let screen = document.querySelector('h1');
let past = 0;
let currnt = 0;
let operator = '';
let key = [];
btns.addEventListener('click', (event) =>{
    event.preventDefault();
    let action = event.target.dataset.action;
    if(event.target.classList.length){
        key = event.target.innerHTML;
        if(!event.target.dataset.action){screen.innerText += key;}
    }
    if(screen.innerText.length>=13){
        screen.innerText='';
        console.log('out of zone')
    }
    if(action === 'add' ||action === 'modul' ||action === 'subtract' 
    ||action === 'multiply' ||action === 'divide')
    {
        past = screen.innerText;
        screen.innerText=null;
        operator =key;
    }

    act(action)
});

const calculate = (n1,operator,n2) =>{
    let result = ''
    if (operator === '+') {
    result = parseFloat(n1) + parseFloat(n2)
    } else if (operator === '-') {
    result = parseFloat(n1) - parseFloat(n2)
    } else if (operator === '*') {
    result = parseFloat(n1) * parseFloat(n2)
    } else if (operator === '/') {
    result = parseFloat(n1) / parseFloat(n2)
    }
    else if (operator === '%') {
        result = parseFloat(n1) % parseFloat(n2)
        }
    return result
}

const act = (action) =>{
    if (action === 'decimal') {
        if(!screen.innerText.includes('.')){screen.textContent  += '.';}
        
    }
    if (action === 'clear') {
        screen.innerText=null;
    }
    if (action === 'calculate') {
        currnt =screen.innerText ;
        screen.innerText=calculate(past,operator,currnt);
    }

    if (!action) {

screen.dataset.previousKey = 'number'
}

    if (action === 'decimal') {screen.dataset.previousKey = 'decimal'}

    if (action === 'clear') {screen.dataset.previousKeyType = 'clear'}

    if (action === 'calculate') {screen.dataset.previousKeyType = 'calculate'}
}