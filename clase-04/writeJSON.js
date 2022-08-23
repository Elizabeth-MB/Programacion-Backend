// LECTURA Y ESCRITURA DE ARCHIVOS JSON
let fs = require('fs')

// Armamos los datos que se van a escribir en el archivo json
let data = `{"${process.argv[2]}": ${process.argv[3]}}`

// Sirve para mostrar los argumentos que se están usando en la línea de comandos al ejecutar el archivo
// console.log(process.argv);

/* El 2 representa que hay 2 espacios */
fs.writeFile('clase-04/data.json', JSON.stringify(JSON.parse(data), null, 2), err => {
    if (!err) {
        console.log('File created');
    }
})