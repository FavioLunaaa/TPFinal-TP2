"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Email = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
class Email {
    enviar(para, asunto, cuerpoMensaje, pathArchivoAdjunto) {
        return new Promise((resolve, reject) => {
            var transporter = nodemailer_1.default.createTransport({
                host: 'smtp.mail.yahoo.com',
                port: 465,
                service: 'yahoo',
                secure: false,
                auth: {
                    user: 'tp2.test@yahoo.com',
                    pass: '136H90mnAD'
                },
                debug: false,
                logger: true
            });
            const mailOptions = {
                from: 'tp2.test@yahoo.com',
                to: para,
                subject: asunto,
                text: cuerpoMensaje,
                attachments: [{ path: pathArchivoAdjunto }]
            };
            transporter.sendMail(mailOptions, function (err, info) {
                if (err) {
                    throw err;
                }
                else {
                    console.log(info);
                }
            });
        });
    }
}
exports.Email = Email;
