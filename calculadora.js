//Inputs
var variableInput1 = document.getElementById("input1");
var variableInput2 = document.getElementById("input2");


//Botones
const botonSumar = document.getElementById("sumar");
const botonRestar = document.getElementById("restar");
const botonMultiplicar = document.getElementById("multiplicar");
const botonDividir = document.getElementById("dividir");
const botonReset = document.getElementById("reset");

//Resultado
var resultado = document.getElementById("resultado");//h2
var inputReset = 0;

//Funciones +, -, *, /

function suma(){
    let valorResultado = Number(variableInput1.value) + Number(variableInput2.value);
    resultado.innerHTML = valorResultado.toFixed(2);
}
botonSumar.addEventListener("click", suma);

function resta(){
    let valorResultado = Number(variableInput1.value) - Number(variableInput2.value);
    resultado.innerHTML = valorResultado.toFixed(2);
}
botonRestar.addEventListener("click", resta);

function multiplicacion(){
    let valorResultado = Number(variableInput1.value) * Number(variableInput2.value);
    resultado.innerHTML = valorResultado.toFixed(2);
}
botonMultiplicar.addEventListener("click", multiplicacion);

function division(){
    let valorResultado = Number(variableInput1.value) / Number(variableInput2.value);
    resultado.innerHTML = valorResultado.toFixed(2);
}
botonDividir.addEventListener("click", division);

//Función reset
function reset(){
    variableInput1.value="";
    variableInput2.value="";
    resultado.innerHTML=inputReset;
}
botonReset.addEventListener("click", reset);
