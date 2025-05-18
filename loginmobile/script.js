const button = document.getElementById('dlmd');
const imagem = document.getElementById('imagem');

function darkmode() {
    document.getElementById('nav1').style.backgroundColor = "#1f1f2e"; // azul escuro
    document.getElementById('nav1').style.color = "#f5f5f5";
    document.getElementById('bode').style.backgroundColor = "#12121b"; // quase preto
    document.getElementById('bode').style.color = "#f5f5f5";
    document.getElementById('txtEmail').style.backgroundColor = "#2c2c3c";
    document.getElementById('txtPassword').style.backgroundColor = "#2c2c3c";
    document.getElementById('txtEmail2').style.backgroundColor = "#2c2c3c";
    document.getElementById('txtPassword2').style.backgroundColor = "#2c2c3c";
    document.getElementById('bode').style.transition = "0.5s";

    imagem.className = "fa-solid fa-sun fa-2xl";
    imagem.style.color = "#ffd93b"; // amarelo vibrante

    dlmd.addEventListener("click", function lightmode() {
        document.getElementById('nav1').style.backgroundColor = "#e3f2fd"; // azul claro
        document.getElementById('nav1').style.color = "#0d47a1"; // azul escuro
        document.getElementById('bode').style.backgroundColor = "#ffffff";
        document.getElementById('bode').style.color = "#0d47a1";
        document.getElementById('txtEmail').style.backgroundColor = "#e1f5fe";
        document.getElementById('txtPassword').style.backgroundColor = "#e1f5fe";
        document.getElementById('txtEmail2').style.backgroundColor = "#e1f5fe";
        document.getElementById('txtPassword2').style.backgroundColor = "#e1f5fe";
        imagem.className = "fa-solid fa-moon fa-2xl";
        imagem.style.color = "#0d47a1"; // azul escuro
        document.getElementById('bode').style.transition = "0.5s";
    });
}
