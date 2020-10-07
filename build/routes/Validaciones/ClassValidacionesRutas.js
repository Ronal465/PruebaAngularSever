"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ValidacionesControlador_1 = require("../../Controladores/Validaciones/ValidacionesControlador");
const JWTValidacionesControlador_1 = require("../../Controladores/Validaciones/JWTValidacionesControlador");
class ValidacionRutas {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        //Ruta Para Obtener una estado de si un correo esta  registrado
        this.router.post('/api/Validar/CorreoElectronico/', ValidacionesControlador_1.ObtValidacionesControlador.PostValidarCorreoElectronico);
        this.router.post('/api/Validar/Identificacion/', ValidacionesControlador_1.ObtValidacionesControlador.PostValidarIdentificacion);
        this.router.post('/api/Validar/Token/CambiarContrasena/', JWTValidacionesControlador_1.ObtJWTValidacionesControlador.VerificarRecuperarContrasena);
        this.router.post('/api/Validar/Token/Register/', JWTValidacionesControlador_1.ObtJWTValidacionesControlador.VerificarCrearUsuario);
    }
}
const ObtValidacionRutas = new ValidacionRutas();
exports.default = ObtValidacionRutas.router;
