const botaoAdd = document.getElementById('botaoAdd');   
const botaoLimpar = document.getElementById('botaoLimpar');
const ul = document.querySelector('ul');
const tarefas = [];

botaoAdd.addEventListener('click', () => {
    const input = document.querySelector('input');
    const tarefa = input.value;
    tarefas.push(tarefa);
            
    input.value = ''
    render()
});

botaoLimpar.addEventListener('click', () => { 
    ul.innerHTML = null;
    tarefas.length = 0;
});
       
// Mostrar estado na tela
function render(){
    ul.innerHTML = null;

    tarefas.forEach(function(tarefa){
        const li = document.createElement('li');
        li.innerHTML = `${tarefa} <hr style="border: none; height: 1px; background-color: #000; margin: 3px 30px;">`;
        ul.appendChild(li);
    })
}        

// Iniciar o processo 
render();