"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AuthControlador_1 = require("../../Controladores/Login/AuthControlador");
const JWTValidacionesControlador_1 = require("../../Controladores/Validaciones/JWTValidacionesControlador");
class Auth {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/api/Login/Login', AuthControlador_1.Authsc.Login);
        this.router.post('/api/Validar/TokenLogin/', JWTValidacionesControlador_1.ObtJWTValidacionesControlador.VerificarLogin);
    }
}
const Authh = new Auth();
exports.default = Authh.router;
