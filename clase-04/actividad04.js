/* Asincronismo y callbacks */
// Desarrollar una función 'mostrarLetras' que reciba un string como parámetro y permita mostrar una vez por segundo cada uno de sus caracteres
const fin = () => console.log('Terminé');

const mostrarLetras = (cadena, cb) => {
    let index = 0;
    const timer = setInterval(() => {
        /* Recorremos la cadena */
        if(index<cadena.length) {
            // Mostramos la cadena con un console log
            console.log(cadena[index]);
            index++
        } else {
            clearInterval(timer)
            // Cuando termina la ejecuta la función callback
            cb()
        }
    }, 1000)

}

// mostrarLetras('Hola', fin)

setTimeout(()=> mostrarLetras('Hola', fin), 0)
setTimeout(()=> mostrarLetras('Hola', fin), 250)
setTimeout(()=> mostrarLetras('Hola', fin), 500)
