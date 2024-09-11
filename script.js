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
function render() {
    ul.innerHTML = '';

    tarefas.forEach(function(tarefa, index) {
        const li = document.createElement('li');

        const textoTarefa = document.createElement('span');
        textoTarefa.innerHTML = `${tarefa} <hr class = "linha-tarefa">`;

        // Cria e configura botão de remover
        const botaoRemover = document.createElement('button');
        botaoRemover.textContent = 'Remover';
        botaoRemover.classList.add('botao');
        botaoRemover.setAttribute("id" , "botaoRemover");


        botaoRemover.addEventListener('click', () => {
            tarefas.splice(index, 1);
            render();
        });

        li.appendChild(textoTarefa);
        li.appendChild(botaoRemover);
        ul.appendChild(li);
    });

}

// Iniciar o processo 
render();

/* function render(){
    ul.innerHTML = null;

    tarefas.forEach(function(tarefa){
        const li = document.createElement('li');
        li.innerHTML = `${tarefa} <button class="botao" id="botaoRemover">Remove</button> <hr class="linha-tarefa"> `;
        ul.appendChild(li);
    })
}        */ 

    /* 
    
    ul.innerHTML = '';

    tarefas.forEach(function(tarefa, index) {
        const li = document.createElement('li');

        const textoTarefa = document.createElement('span');
        textoTarefa.textContent = `${tarefa}`;

        // Cria e configura botão de remover
        const botaoRemover = document.createElement('button');
        botaoRemover.textContent = 'Remover';
        botaoRemover.classList.add('botao');
        botaoRemover.setAttribute("id" , "botaoRemover");


        botaoRemover.addEventListener('click', () => {
            tarefas.splice(index, 1);
            render();
        });

        li.appendChild(textoTarefa);
        li.appendChild(botaoRemover);
        ul.appendChild(li);
    });

    */



