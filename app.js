const { crearArchivo } = require('./helpers/multiplicar');
const argv= require('./config/yargs');
const colors = require('colors');
//const [ , , arg3 ='base=5']=process.argv;             DOCUMENTACION, YA NO SIRVE
//const [ , base=5]= arg3.split('=');                   DOCUMENTACION, YA NO SIRVE

console.clear();

crearArchivo(argv.b, argv.l,argv.h)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'.bgGreen))
    .catch(err => console.log(err));

