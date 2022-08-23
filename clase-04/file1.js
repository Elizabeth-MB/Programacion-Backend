/* Módulo fileSystem */
const fs = require('fs')

/* Función para escribir en modo sincrónico, no lleva callback */
// Si el archivo no existe, lo crea

// fs.writeFileSync('clase04.txt', 'Mi primera vez escribiendo en un archivo')
// fs.writeFileSync('clase04.txt', 'Mi segunda vez escribiendo en un archivo')

// Lee el archivo, no lleva callback, devuelve el contenido del archivo
// Pasamos el segundo argumento, para que la salida esté codificada en utf-8
// let contenido = fs.readFileSync('clase04.txt', 'utf-8')
// console.log(contenido);

/* Forma 2, usando toString */
/* Implementamos un trycatch, en caso de que no exista el archivo que se va leer, captura el error */

/* try {
    let contenido = fs.readFileSync('clase04.txt')
    console.log(contenido.toString());
} catch { */
// } catch (err) {
    /* En caso de que no exista el archivo, mostramos el error */
    // console.log(err.message);
    
    // En caso de que no exista el archivo, lo creamos
/*     fs.writeFileSync('clase04.txt', 'Ahora si existe')
} */


// AGREGAR CONTENIDO A UN ARCHIVO YA EXISTENTE SIN SOBREESCRIBIR
fs.appendFileSync('clase04.txt', 'texto nuevo agregado')