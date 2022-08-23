// Proceso asincrónico
function hacerTarea(num, cb) {
    console.log('haciendo tarea ' + num)
    setTimeout(cb,100)
}

console.log('inicio de tareas');

/* Uso de callbacks: una estructura que supone varios problemas; motivo que da pie al tema de promesas */
hacerTarea(1, () => {
    hacerTarea(2, () => {
        hacerTarea(3, () => {
            hacerTarea(4, () => {
                console.log('fin de tareas')
            })
        })
    })
})
console.log('otras tareas ...')