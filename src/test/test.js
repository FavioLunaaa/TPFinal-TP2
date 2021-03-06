"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const email_1 = require("../shared/email");
const pdf_1 = require("../shared/pdf");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const archivo = './ORT - TP2 - Trabajo Practico Final (1.1.0).pdf';
        const pdf = new pdf_1.Pdf();
        yield pdf.crear("hola mundo", archivo);
        const email = new email_1.Email();
        email.enviar("tp2.test@yahoo.com", " tp2 test", "Cuerpo mensaje", archivo);
        console.log('test');
    });
}
//testearlo con node ./src/test/test.js
main();
