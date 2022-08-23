/* Realizar un programa que: A) Guarde en un archivo llamado fyh.txt la fecha y hora actual.B) Lea nuestro propio archivo de programa y lo muestre por consola. */

/* Mandamos llamar la librería FileSystem */
const fs = require('fs')

try {
    
    // console.log(contenido);
    fs.writeFileSync('clase-04/fyh.txt', new Date().toLocaleString())

    let archivo = fs.readFileSync('clase-04/fyh.txt')
    console.log(archivo.toString());

} catch (err) {

    // console.log(err.message);
    throw new Error(err.message)
}

// fs.writeFileSync('clase-04/fyh.txt', 'Fecha y hora')