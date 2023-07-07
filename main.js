function generarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function iniciarJuego() {
    let min = parseInt(prompt("Ingrese en menor: "));
    let max = parseInt(prompt("Ingrese en mayor: "));
    const numeroAleatorio = generarNumeroAleatorio(min, max);
    let intentos = 0;
    let adivinado = false;

    while (adivinado === false) {
        intentos++;
        let numeroUsuario = parseInt(prompt("Adivina el número. Esta entre " + min + " y " + max));


        if (numeroUsuario === numeroAleatorio) {
            alert("¡Felicidades! Adivinaste el número en " + intentos + " intentos.");
            adivinado = true;
        } else if (numeroUsuario < numeroAleatorio) {
            if (numeroUsuario > min){
                min = numeroUsuario
            }
            alert("El número es demasiado bajo.");
        } else {
            if (numeroUsuario < max){
                max  = numeroUsuario
            }
            alert("El número es demasiado alto.");
        }
    }
}

iniciarJuego();
