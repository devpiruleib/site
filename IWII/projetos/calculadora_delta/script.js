function calcular(){
    let a = document.getElementById('n1').value
    let b = document.getElementById('n2').value
    let c = document.getElementById('n3').value

    let resultado = (b * b) - (4 * a * c)

    document.getElementById('resultado').innerHTML = "O resultado do delta é: " + resultado
}