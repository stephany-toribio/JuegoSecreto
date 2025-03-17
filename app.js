let numeroSecreto = 0;
let intento = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function verificarIntento(){
    let numero = parseInt(document.getElementById("numeroIngresado").value);
    if (numeroSecreto === numero){
        asignarTextoElemento('p', `Acertaste en ${intento} ${intento == 1 ? 'intento.' : 'intentos.'}`);
        document.querySelector('#iniciar').setAttribute('disabled', 'true'); //se desactiva el boton de Intentar
        document.getElementById('reiniciar').removeAttribute('disabled'); //se activa el boton de Nuevo Juego
    } else {
        if (numeroSecreto > numero){
            asignarTextoElemento('p', 'El número secreto es mayor.');
        } else {
            asignarTextoElemento('p', 'El número secreto es menor.');
        }
        intento ++;
        limpiarCaja();
    }
    return;
};

function limpiarCaja(){
    return document.querySelector('#numeroIngresado').value = '';
}

function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled', 'true'); //desactiva el boton de Nuevo Juego
    document.getElementById('iniciar').removeAttribute('disabled'); //activo el boton de Intentar
    return;
}

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
};

function generarNumeroAleatorio(){
    let numeroGenerado = Math.floor((Math.random()*numeroMaximo)+1);
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles.');
    } else {
        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroAleatorio();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
};

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del número secreto!');
    asignarTextoElemento('p', `Ingresa un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroAleatorio();
    intento = 1;
    return;
}

condicionesIniciales();