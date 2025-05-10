function mensagem1(){
    //Alerta que diz bom dia ao ser chamado no clique do botão.
    alert('Bom dia!')
}

function mensagem2(){
    //Quando chamado pelo botão, escreve uma mensagem em <p>
    document.getElementById("m1").innerHTML = "Bom dia"
}

function mensagem3(){
    //Variável nome armazena o conteúdo da caixa de texto feita no HTML e escreve uma mensagens desejando bom dia ao usuário
    let nome = document.getElementById("txt_nome").value
    if(nome != "Carmem" && nome != "carmem"){
    document.getElementById("m1").innerText = "Bom dia, "+nome+"! "
    }else{
        document.getElementById("m1").innerHTML = "Vai se fuder, "+nome+". "
    }
}

function mensagem4(){
    document.getElementById("aulas").innerHTML = "1º aula: Interface Web II, 2º aula: Interface Web II, 3º aula: Vaga, 4º aula: Biologia, 5º aula: Biologia, 6º aula: Português, 7º aula: Português, 8º aula: Matemática"
}

function mensagem5(){
    document.getElementById("aulas").innerHTML = "1º aula: Inglês, 2º aula: Física, 3º aula: Geografia, 4º aula: Sistema Web I, 5º aula: Sistema Web I, 6º aula: História, 7º aula: Matemática, 8º aula: Matemática"
}

