const fs = require('fs');
//fs es igual a file system
const colors = require('colors');
const { argv } = require('process');

const crearArchivo = async (base = 5, listar, hasta=10) => {

    try {

        if (listar === true) {
            console.log('==============================='.brightRed.bgBlue);
            console.log(`        Tabla del ${base}:     `.green);
            console.log('==============================='.brightRed.bgBlue);
        }

        let salida = '';
        let consola = '';
        for (let i = 1; i <= hasta; i++) {
            salida  += `${base} x ${i} = ${i * base}\n`;  //esta lo escribe en el ARCHIVO, sin los caracteres especiales de colors 
            consola += `${base} ${'x'.green} ${i} ${'='.green} ${i * base}\n`;// esta lo imprime en CONSOLA con los colors
        } if (listar === true) {
            console.log(consola);
        }


        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return (`tabla-${base}.txt`.bgGreen);
    } catch (err) {
        throw err;
    }
}



module.exports = {
    crearArchivo
};