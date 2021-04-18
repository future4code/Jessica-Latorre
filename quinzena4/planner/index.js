let contadorDeTarefa = 0


function adicionarTarefa(){
    let tarefa = document.getElementById("tarefa").value
    if (tarefa === ""){ //item 1 do desafio proposto.
        alert("Campo em branco, por favor, digite alguma tarefa")
        return
    }
    let diaSemana = document.getElementById("dias-semana").value
    let idTarefa = `tarefa-${contadorDeTarefa}`
    let horarioTarefa = confirm("Deseja adicionar um horário a esta tarefa?")
    if (horarioTarefa === true){
        
        let horario = prompt("Adicione um horário para esta tarefa. (ex.: 00h, 13h)")// adiciona horario as tarefas criadas.
        document.getElementById(diaSemana).innerHTML += `<p id=${idTarefa} onclick='riscarTarefa("${idTarefa}")'>- ` + tarefa + ` início às: `+ horario + ` </p>`
        document.getElementById("tarefa").value = ""
    } else{
        
        document.getElementById(diaSemana).innerHTML += `<p id=${idTarefa} onclick='riscarTarefa("${idTarefa}")'>- ` + tarefa + ` </p>`
        document.getElementById("tarefa").value = ""
    }
    contadorDeTarefa++
}
function riscarTarefa(id){
    let tarefa = document.getElementById(id)
    tarefa.innerHTML = `<p class="tarefa-riscada">${tarefa.innerHTML}</p>`
}


function limparTarefas(){ // Agora funciona normalmente, conforme o enunciado do desafio.
    let diasDaSemana = document.querySelectorAll(".semana > div")
    for(let index of diasDaSemana){
        index.innerHTML = ""
    }
    
    }
    
   
