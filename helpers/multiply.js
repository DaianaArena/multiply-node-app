const fs = require('fs'); //paquete que trae las funciones de archivos
const colors = require('colors');

const crearArchivo = async(base, listar, hasta) => {

    try {
        let tablas = [];

        for (let index = 1; index < hasta+1; index++) {
            const rta = `${base +' x ' + index + ' = ' + base * index}\n`;
            tablas.push(rta);
        }

        let tablasText = tablas.toString(); //ES NECESARIO PASAR COMO ARGUMENTO DEL WRITE FILE UN STRING

        fs.writeFile(`./salida/tabla-del-${base}.txt`, tablasText, (err) => {
        if (err)
            console.log(err);
        else {

            if (listar == true){
                
            console.log("-------LISTADO DE LA TABLA------\n".rainbow,
            tablasText,
            "-------------------------------".rainbow);
            }

            console.log("File written successfully\n".bgGreen);
        }
        });

        return `tabla-del-${base}.txt`;
    } catch (err) {
        throw err;
    }
};

module.exports = {
    crearArchivo
}