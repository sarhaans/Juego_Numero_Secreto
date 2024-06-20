
/*
let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Escoge un numero del 1 al 10';
*/
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;


function asignarTextoElemento(elementos, texto){
    let elementoHTML = document.querySelector(elementos); //El document.querySelector me permite llamar elementos del html para usarlos en JS
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){ //Para la declaracion de funciones siempre usar palabra reservada function
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acerto.
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El numero secreto es menor');
        } else {
            asignarTextoElemento('p', 'El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    /*
    let valorCaja = document.querySelector('#valorUsuario');
    valorCaja.value = '';
    */
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    numeroSecreto = Math.floor(Math.random() * numeroMaximo) + 1;
    console.log(numeroSecreto);
    console.log(listaNumerosSorteados);

    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Yase sortearon todos los numeros posibles');
    }else{
        if (listaNumerosSorteados.includes(numeroSecreto)){
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroSecreto)
            return numeroSecreto;
        }
    }
    
    
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del numero secreto');
    asignarTextoElemento('p', `Escoge un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //Limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de numeros
    condicionesIniciales();
    //Generar el numero aleatorio
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
    //Inicializar el numero de intentos
}

condicionesIniciales();
