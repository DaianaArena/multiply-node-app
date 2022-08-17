//esta carpeta y este archivo son creados a mano para tener mas orden en mi root. 
//Aqui va la configuracion interna de yargs de mi app

const { describe } = require('yargs');


//COMO RECONOCER PARAMETROS DE CONSOLA A TRAVES DE LAS DEPENDENCIAS DE YARGS
const argv = require('yargs') //llama al comando de yargs para recibir parametros por consola
    .option('b', {   //funcion de YARGS que sirve para definir variables a la hora de recibir un comando x consola
        alias: 'base', //alias de la variable. es decir, puedo hacer --b o --base
        type: 'number',
        demandOption: true, //como esta en 'true' me exige mandar el comando
        describe: 'Toma la base para armar la tabla'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        demandOption: false,
        describe: 'Lista la tabla pedida en consola'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        demandOption: false,
        default: 10,
        describe: 'Hasta que número multiplicar por la base'
    })
    .check((argv, options) =>{ //chequea que el comando enviado sea un numero
        if (isNaN(argv.b)){
            throw 'La base debe ser un numero';
        } 
        if (isNaN(argv.h)){
            throw 'El comando h debe tener un numero';
        } 
        return true
    })
    .argv;

module.exports = argv;