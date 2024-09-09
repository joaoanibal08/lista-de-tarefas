        // Estado da aplicação
        const tarefas = ['Estudar HTML', 'Estudar CSS', 'Estudar JS'];

        // Alteradores de estado da aplicação

        function add(){
            const input = document.querySelector('input');
            const tarefa = input.value;
            tarefas.push(tarefa);
            
            input.value = ''
            render()
        };

        // Mostrar estado na tela

        function render(){
            const ul = document.querySelector('ul');
            ul.innerHTML = null;

            tarefas.forEach(function(tarefa){
                const li = document.createElement('li');
                li.innerText = tarefa;
                ul.appendChild(li);
            })
        }

        // Iniciar o processo 
        render();