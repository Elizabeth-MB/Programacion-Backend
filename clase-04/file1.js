/* Módulo fileSystem */
const fs = require('fs')

/* Función para escribir en modo sincrónico, no lleva callback */
// Si el archivo no existe, lo crea
// fs.writeFileSync('clase04.txt', 'Mi primera vez escribiendo en un archivo')
fs.writeFileSync('clase04.txt', 'Mi segunda vez escribiendo en un archivo')