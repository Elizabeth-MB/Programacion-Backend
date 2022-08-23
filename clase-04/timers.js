// No se detiene hasta que se le agregue una condición que pare el proceso
let counter = 0;

let timer = setInterval(() => {
    if(counter<=20){
        console.log('Coder');
        counter++
    }else {
        clearInterval(timer)
    }
}, 200)

// Hace que se detenga el código anterior luego de 10 segundos
// setTimeout(() => {
//     clearInterval(timer)
// }, 10000)

/* Con el if que se agregó ya no es necesario el uso del setTimeout */
