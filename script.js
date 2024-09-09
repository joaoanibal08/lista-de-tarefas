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
        li.innerHTML = `${tarefa} <button class="botao" id="botaoRemover">Remove</button> <hr class="linha-tarefa"> `;
        ul.appendChild(li);
    })
}        

// Iniciar o processo 
render();