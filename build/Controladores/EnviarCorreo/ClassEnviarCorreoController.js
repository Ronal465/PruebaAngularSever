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
exports.ObtEnviarCorreoController = void 0;
class EnviarCorreoController {
    constructor() {
        this.Correo = "produccionclub99@gmail.com";
        this.Contrasena = "Administrador123";
    }
    ValidarCorreo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var nodemailer = require('nodemailer');
            // create reusable transporter object using the default SMTP transport
            // var transporter = nodemailer.createTransport('smtps://proyectocelutel@gmail.com:Celutel2019*');
            var transporter = nodemailer.createTransport({
                host: "smtp.gmail.com",
                port: 587,
                secure: false,
                auth: {
                    user: this.Correo,
                    pass: this.Contrasena,
                }
            });
            // setup e-mail data with unicode symbols
            const { CorreoElectronico } = req.params;
            var mailOptions = {
                from: this.Correo,
                to: '' + CorreoElectronico,
                subject: 'Objetivo ',
                text: 'Texto De Ejemplo',
                html: `<p>Su Nueva Contraseña Es:</p><p></p>` // html body
            };
            res.json({ Message: 'Correo Enviado' });
            // send mail with defined transport object
            yield transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    return console.log(error);
                }
                console.log('Message sent: ' + info.response);
            });
        });
    }
    CrearUsuarioCorreo(TokenRegisterDone, CorreoElectronico) {
        return __awaiter(this, void 0, void 0, function* () {
            var nodemailer = require('nodemailer');
            // create reusable transporter object using the default SMTP transport
            // var transporter = nodemailer.createTransport('smtps://proyectocelutel@gmail.com:Celutel2019*');
            var transporter = nodemailer.createTransport({
                host: "smtp.gmail.com",
                port: 587,
                secure: false,
                auth: {
                    user: this.Correo,
                    pass: this.Contrasena,
                }
            });
            var mailOptions = {
                from: this.Correo,
                to: '' + CorreoElectronico,
                subject: 'Objetivo ',
                text: 'Texto De Ejemplo',
                html: `<p>Su Link Para entrar Es http://localhost:4200/ValidacionCorreoRegistro/${TokenRegisterDone} </p>` // html body
            };
            // send mail with defined transport object
            yield transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    return console.log(error);
                }
                console.log('Message sent: ' + info.response);
            });
            return {};
        });
    }
    RecuperarContraseña(TokenRecuperarContrasenaDone, CorreoElectronico) {
        return __awaiter(this, void 0, void 0, function* () {
            var nodemailer = require('nodemailer');
            // create reusable transporter object using the default SMTP transport
            // var transporter = nodemailer.createTransport('smtps://proyectocelutel@gmail.com:Celutel2019*');
            var transporter = nodemailer.createTransport({
                host: "smtp.gmail.com",
                port: 587,
                secure: false,
                auth: {
                    user: this.Correo,
                    pass: this.Contrasena,
                }
            });
            var mailOptions = {
                from: this.Correo,
                to: '' + CorreoElectronico,
                subject: 'Objetivo ',
                text: 'Texto De Ejemplo',
                html: `<p>Su Link Para entrar Es http://localhost:4200/RecuperarContrasena/${TokenRecuperarContrasenaDone} </p>` // html body
            };
            // send mail with defined transport object
            yield transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    return { Estado: "Fallo" };
                }
                console.log('Message sent: ' + info.response);
            });
            return { Estado: "Correcto" };
        });
    }
}
exports.ObtEnviarCorreoController = new EnviarCorreoController();
