function primeiroNum() {
    let num1 = Number(document.querySelector('input#num1').value)
    return num1
}

function segundoNum() {
    let num2 = Number(document.querySelector('input#num2').value)
    return num2
}

function calcular(operacao) {
    let num1,num2,res

    num1 = primeiroNum()
    num2 = segundoNum()

    switch (operacao) {
        case '+':
            res = num1+num2
            break;
        case '-':
            res = num1-num2
            break;
        case '*':
            res = num1*num2
            break;
        case '/':
            res = num1/num2
            break;
        default:
            alert('ERRO')
            break;
    }
    imprimeDados(res)
}

function imprimeDados(resultado) {
    document.querySelector('input#res').value = resultado
}