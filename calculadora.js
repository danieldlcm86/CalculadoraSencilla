//Inputs
var variableInput1 = document.querySelector("#input1");
var variableInput2 = document.querySelector("#input2");


//Botones
var botonSumar = document.querySelector("#sumar");
var botonRestar = document.querySelector("#restar");
var botonMultiplicar = document.querySelector("#multiplicar");
var botonDividir = document.querySelector("#dividir");
var botonReset = document.querySelector("#reset");

//Resultado
var resultado = document.querySelector("#resultado");//h2
var valorResultado = 0;
//var inputReset = 0;

//Funciones +, -, *, /

function suma(){
    valorResultado = Number(variableInput1.value) + Number(variableInput2.value);
    resultado.innerHTML = valorResultado.toFixed(4);
}
botonSumar.addEventListener("click", suma);

function resta(){
    valorResultado = Number(variableInput1.value) - Number(variableInput2.value);
    resultado.innerHTML = valorResultado.toFixed(4);
}
botonRestar.addEventListener("click", resta);

function multiplicacion(){
    valorResultado = Number(variableInput1.value) * Number(variableInput2.value);
    resultado.innerHTML = valorResultado.toFixed(4);
}
botonMultiplicar.addEventListener("click", multiplicacion);

function division(){
    valorResultado = Number(variableInput1.value) / Number(variableInput2.value);
    resultado.innerHTML = valorResultado.toFixed(4);
}
botonDividir.addEventListener("click", division);

//Función reset
function reset(){
    valorResultado = 0;
    variableInput1.value="";
    variableInput2.value="";
    resultado.innerHTML = valorResultado;
}
botonReset.addEventListener("click", reset);
