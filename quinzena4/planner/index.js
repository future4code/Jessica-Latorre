

function adicionarTarefa(){
    let tarefa = document.getElementById("tarefa").value
    if (tarefa === ""){ //item 1 do desafio proposto.
        alert("Campo em branco, por favor, digite alguma tarefa")
        return
    }
    let diaSemana = document.getElementById("dias-semana").value

    
    document.getElementById(diaSemana).innerHTML += `<p>- ` + tarefa +` </p>`
    document.getElementById("tarefa").value = ""

}  

function limparTarefas(){ // só funciona se selecionar o dia da semana das tarefas que deseja limpar.
    let diaSemana = document.getElementById("dias-semana").value
    document.getElementById(diaSemana).innerHTML = ""
   
}