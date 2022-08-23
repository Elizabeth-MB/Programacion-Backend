/* MANEJO DE ARCHIVOS DE MANERA ASINCRÓNICA */

let fs = require('fs')

/* tiene un callback */
/* fs.readFile('clase-04/fyh.txt', (err, data) => {
    if(err) {
        console.log(err.message);
    } else {
        console.log(data.toString());
    }
}) */

/* fs.writeFile('clase-04/clase4.txt', 'Hello World', err => {
    if(!err) {
        fs.readFile('clase-04/clase4.txt', (err, data) => {
            if(!err) console.log(data.toString());
        })
    }
}) */

/* fs.appendFile('clase-04/clase4.txt', '\nSame data', err => {
    if(!err) console.log('success');
}) */

fs.unlink('clase-04/fyh.txt', err => {
    if(!err) console.log('Deleted!');
})