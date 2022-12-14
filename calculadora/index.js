const displayValorAnterior = document.getElementById('valor-anterior')
const displayValorActual = document.getElementById('valor-actual')
const botonesNumeros = document.querySelectorAll('.numero');
const botonesNumeros = document.querySelectorAll('.operador');

const Calculadora = new Calculadora();

console.log(Calculadora.sumar(2,3))
console.log(Calculadora.restar(2,3))
console.log(Calculadora.multiplicar(2,3))
console.log(Calculadora.dividir(2,3))