//const numero = 10

//alert('O valor fixo da constante numero é '+numero)

//let n = 58
//n = 15
//let n1,n2
//n1 = 10
//n2 = 2
//let soma = n1 + n2
//let subtracao = n1 - n2
//let multiplicacao = n1 * n2
//let divisao = n1 / n2
//alert('soma: '+soma
//    +'\nsubtração: '+subtracao
//    +'\nmultiplicação: '+multiplicacao
//    +'\ndivisão: '+divisao
//)

//let nome = 'Gabriel'
//alert('Olá, '+nome)

//

function calcular() {
    const n1 = parseFloat(document.getElementById('numero1').value);
    const operacao = document.getElementById('operacao').value;
    const n2 = parseFloat(document.getElementById('numero2').value);
    let resultado;

    if (operacao === "+") {
        resultado = n1 + n2;
    }else if(operacao === "-"){
        resultado = n1 - n2
    }else if(operacao === "*"){
        resultado = n1 * n2
    }else if(operacao === "/"){
        resultado = n1 / n2
    }

    document.getElementById('resultado').innerHTML = "O resultado é " + resultado;
}
