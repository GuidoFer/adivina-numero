//Creamos una variable global
let numeroRandom = 0;
let intentos = 0;
let listaNumerosSorteados = []; //creamos una lista vacia para almacenar los numeros random
let numeroMaximo = 10; //para el numero maximo de numeros random generados
//Creamos una funcion con dos parametros que nos permite agregar texto a cada elemento del html.
function elementoTexto(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
//Creamos una funcion para generar un numero random
function generaNumeroRandom(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //console.log(numeroGenerado);
    //console.log(listaNumerosSorteados);
    if(listaNumerosSorteados.length == numeroMaximo){
        elementoTexto("p", "Ya se sortearon todos los numeros posibles")
    }
    else{

        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generaNumeroRandom();
        }
        else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    if(numeroDeUsuario===numeroRandom){
        elementoTexto("p", `Acertaste el numero en ${intentos} ${intentos==1 ? "vez": "veces"}`);
        document.getElementById("reiniciar").removeAttribute("disabled"); //para habilitar el boton nuevo juego
    }
    else{
        if(numeroDeUsuario>numeroRandom){
            elementoTexto("p", "El numero es menor")
        }
        else{
            elementoTexto("p", "El numero es mayor")
        }
    }
    intentos++;
    limpiarCaja();
}
//Creamos una funcion para limpiar la caja donde nos pide los numeros
function limpiarCaja(){
    document.querySelector("#valorUsuario").value = "";
}
//Creamos una funcion llamada condiciones iniciales que me permite reiniciar el juego en una sola funcion
function condicionesIniciales(){
    elementoTexto("h1", "Juego del numero secreto");
    elementoTexto("p", `Ingrese un numero del 1 al ${numeroMaximo}`);
    numeroRandom = generaNumeroRandom();
    intentos = 1;
}
//Creamos la funcion reiniciar juego
function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de numeros
    //generar numero aleatorio
    //inicializar el numero de intentos
    condicionesIniciales();
     //desabilitar el boton de nuevo juego
     document.querySelector("#reiniciar").setAttribute("disabled", "true");
}

condicionesIniciales();
