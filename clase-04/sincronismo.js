/* Simula la ejecución de las tareas con un for, simula la demora a través de un for */
const delay = ret => { for (let i = 0; i < ret * 3e6; i++); }

function hacerTarea(num) { 
    console.log('haciendo tarea ' + num)
    /* Cada tarea demora 100 milisegundos */
    delay(100) 
} 

/* Simula la ejecución de varias tareas */
/* Ejecución de las tareas en orden - Proceso sincrónico: se ejecuta una tarea luego de otra */
console.log('inicio de tareas'); 
hacerTarea(1)
hacerTarea(2)
hacerTarea(3)
hacerTarea(4)
console.log('fin de tareas')
console.log('otras tareas ...')