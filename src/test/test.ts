import {Email} from '../shared/email'
import {Pdf} from '../shared/pdf'

async function main() {

    const archivo = './ORT - TP2 - Trabajo Practico Final (1.1.0).pdf'

    const pdf : Pdf = new Pdf();
    await pdf.crear("hola mundo",archivo);
   
    const email : Email = new Email();
    email.enviar("tp2.test@yahoo.com"," tp2 test","Cuerpo mensaje",archivo);
    console.log('test');

}
//testearlo con node ./src/test/test.js
main(); 
