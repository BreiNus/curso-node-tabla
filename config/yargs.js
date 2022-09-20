const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,             //si este valor es requerido o no
        describe: 'Es la base de la tabla de multiplicar'
    }).option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,                   //valor por defecto
        describe: 'Muestra la tabla en consola'
    }).option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,                   
        describe: 'Hasta que multiplo llega la tabla'
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'La base tiene que ser un numero'
        }
        return true;
    })
    .check((argv,options) =>{
        if (isNaN(argv.h)) {
            throw 'El multiplo limite tiene que ser un numero'
        }
        return true;
    })
    .argv;


module.exports = argv;