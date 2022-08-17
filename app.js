console.clear(); //limpia la consola


const { crearArchivo } = require('./helpers/multiply');
const argv = require('./config/yargs');


//COMO RECONOCER PARAMETROS DE CONSOLA DE FORMA MANUAL (SIN YARGS)
// const [, , comando] = process.argv; //recibe los datos enviados por consola - comandos etc
// const [, base] = comando.split('='); //separo el --base=5 para aislar el numero
// console.log("la base es ",base);


/////// APLICACION //////
// if( base === undefined){
//   console.log("Por favor, envie una base para imprimir la tabla correspondiente") 
// } else {
 
//  crearArchivo(base)
//   .then(nombreDeArchivo => console.log(nombreDeArchivo, "creado"))
//   .catch(err => console.log(err));
// }

//const base = 9;
 crearArchivo(argv.base, argv.listar, argv.hasta)
   .then(nombreDeArchivo => console.log(nombreDeArchivo, "creado"))
   .catch(err => console.log(err));
