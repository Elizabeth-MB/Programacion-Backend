const fs = require('fs')

try {
    fs.readFile('package.json', 'utf-8', (err, data) => {
        if (err) throw 'error'
        const info = {
            contenidoStr: data,
            /* Contenido del package json en formato json */
            contenidoObj: JSON.parse(data)
        }
        /* Cambiamos el nombre del autor sobrescribiendo en el archivo package.json */
        info.contenidoObj.author = 'Eli'
        fs.writeFile('package.json', JSON.stringify(info.contenidoObj, null, 2), err => {
            if (err) throw 'error'
        })

        // console.log(info.contenidoObj.author);
    
    })
} catch (err) {
    console.log(err.message);
}
