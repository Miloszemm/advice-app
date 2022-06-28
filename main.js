const advices = ['walcz', 'nie poddawaj się'];

const resetOptions = (e) => {
    e.preventDefault();
    advices.length = 0;
}

document.querySelector('.clean').addEventListener('click', resetOptions)


const showOptions = () => {
    alert(advices.join(', '))
}

document.querySelector('.showOptions').addEventListener('click', showOptions)



const addOption = (e) => {
    e.preventDefault();
    const input = document.querySelector('input');
    const alertMessage = `dodałem ${input.value}`;

    advices.push(input.value)
    alert(alertMessage);
    input.value = "";
}



document.querySelector('.add').addEventListener('click', addOption)


const showAdvice = ()=>{
    const index = Math.floor(Math.random() * advices.length);
    document.querySelector('h1').textContent = advices[index];

}

document.querySelector('.showAdvice').addEventListener('click', showAdvice)