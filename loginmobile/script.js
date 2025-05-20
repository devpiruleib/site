let botao = document.getElementById('changemode');
let body = document.getElementById('body1');
let container = document.getElementById('container');
let imagem = document.getElementById('imagem');
let nav = document.getElementById('nav1');
let ativo = 0;

botao.addEventListener("click", () => {
    ativo++;
    container.style.transition = "0.5s";
    nav.style.transition = "0.5s";
    botao.style.transition = "0.5s";
    

    if(ativo === 1){
        body1.className = "dark-mode";
        imagem.className = "fa-solid fa-sun fa-2xl";
        imagem.style.color = "#ffd93b"
        
    }else{
        body1.className = "light-mode";
        imagem.className = "fa-solid fa-moon fa-2xl";
        imagem.style.color = "#0d47a1";
        ativo = 0;
    }
})
