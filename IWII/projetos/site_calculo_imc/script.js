function calcular(){
    let p = document.getElementById('txtPeso').value
    let a = document.getElementById('txtAltura').value
    let resultado = p/(a*a)

    document.getElementById('resultado').innerText = resultado.toFixed(2)
}