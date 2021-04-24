

function criarPost(){
    
    // declarando as variaveis
    let tituloPost = document.getElementById("titulo-post").value
    let autorPost = document.getElementById("autor-post").value
    let conteudoPost = document.getElementById("conteudo-post").value
    
    let containerPost = document.getElementById("container-de-posts")
    
    let arrayObejto = []

    // objeto dos campos do form
    let postInput = {
    titulo: tituloPost,
    autor: autorPost,
    conteudo: conteudoPost
    }

    // limpa o form
    document.getElementById("titulo-post").value = ""
    document.getElementById("autor-post").value = ""
    document.getElementById("conteudo-post").value = ""

    // adiciona o post ao container de posts
    containerPost.innerHTML += `
    <h2>${postInput.titulo}</h2>
     <p>${postInput.autor}</p>
     <p>${postInput.conteudo}</p>`

     // adiciona o objeto no array
     arrayObejto.push(postInput)
    
}



