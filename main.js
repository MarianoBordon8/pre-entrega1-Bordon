//Funcion que genera un numero aleatorio en el rango definido por los parametros
function generarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//funcion que valida que el valor ingresado por el usuario sea un numero
function validarNumero(num) {
    return isNaN(num);
}

//funcion que valida que el numero ingresado esta entre un rango especifico
function validarRango(num, rangoMenor, rangoMayor) {
    return num >= rangoMenor && num <= rangoMayor;
}

//funcion que inicia el juego
function iniciarJuego() {
    //creacion de variables
    let min = parseInt(prompt("Ingrese el limite menor: "));
    let max = parseInt(prompt("Ingrese el limite mayor: "));
    let intentos = 0;
    let adivinado = false;
    let limitesCorrectos = true;

    //este while verifica que los valores de los rangos sean correctos
    while (limitesCorrectos === true){
        if (validarNumero(min)){
            min = parseInt(prompt("Valor incorrecto.\n Ingrese el limite menor: "));
            continue;
        }
        if (validarNumero(max) || (max < min)){
            max = parseInt(prompt("Valor incorrecto.\n Ingrese el limite mayor: "));
            continue;
        }
        limitesCorrectos = false;
    }

    //creacion del numero aleatorio
    const numeroAleatorio = generarNumeroAleatorio(min, max);

    //este while se usa para adivinar el numero una vez listos los parametros
    while (adivinado === false) {
        //intento del usuario
        let numeroUsuario = parseInt(prompt("Adivina el número. Esta entre " + min + " y " + max));

        //validar que el numero ingresado este entre el rango determinado
        if (validarRango(numeroUsuario, min, max) === false){
            alert("El valor ingresado no esta dentro del rango");
            continue;
        }

        //contador de intentos
        intentos++;

        //adivinar el numero y modificar los limites del rango
        if (numeroUsuario === numeroAleatorio) {
            alert("¡Felicidades! Adivinaste el número en " + intentos + " intentos.");
            adivinado = true;
        } else if (numeroUsuario < numeroAleatorio) {
            if (numeroUsuario > min){
                min = numeroUsuario;
            }
            alert("El número es demasiado bajo.");
        } else {
            if (numeroUsuario < max){
                max  = numeroUsuario;
            }
            alert("El número es demasiado alto.");
        }
    }
}

iniciarJuego();