function jogar(){
    let numerosorteado = Math.floor(Math.random() * 6) + 1;

    if(numerosorteado == 1){
        document.getElementById('imagem').src="images/dado1.png"
    }else if(numerosorteado == 2){
        document.getElementById('imagem').src="images/dado2.png"
    }else if(numerosorteado == 3){
        document.getElementById('imagem').src="images/dado3.png"
    }else if(numerosorteado == 4){
        document.getElementById('imagem').src="images/dado4.png"
    }else if(numerosorteado == 5){
        document.getElementById('imagem').src="images/dado5.png"
    }else if(numerosorteado == 6){
        document.getElementById('imagem').src="images/dado6.png"
    }else{
        document.getElementById('imagem').src="images/dadocominterrogacao.png"
    }

    document.getElementById('teste').innerText = numerosorteado
}

