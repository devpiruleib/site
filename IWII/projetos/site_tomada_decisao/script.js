function verificarlogin(){
    let login = document.getElementById('login').value
    let senha = document.getElementById('senha').value

    if(login == 'aluno' && senha == 'aluno123'){
        window.location = "aluno.html"
    }else if(login == "professor" && senha == "prof123"){
        window.location = "professor.html"
    }else{
        alert('acesso negado')
    }
}