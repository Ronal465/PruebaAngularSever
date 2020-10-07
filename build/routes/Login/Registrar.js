"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const RegistrarControlador_1 = require("../../Controladores/Login/RegistrarControlador");
class Registrar {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/api/Login/Registrar', RegistrarControlador_1.Registro.RegistrarUsuarioToken);
        this.router.post('/api/Validar/CrearUsuario/', RegistrarControlador_1.Registro.RegistrarUsuario);
        this.router.post('/api/Recuperar/Contrasena/Token/', RegistrarControlador_1.Registro.RecupearContraseñaToken);
        this.router.post('/api/Recuperar/Contrasena/Cambiar/', RegistrarControlador_1.Registro.RecupearContraseña);
        this.router.post('/api/Crear/Profesor/', RegistrarControlador_1.Registro.PostCrearProfesor);
        this.router.post('/api/Crear/Experiencia/', RegistrarControlador_1.Registro.PostExperienciaProfesor);
        this.router.post('/api/Cambiar/Contrasena/', RegistrarControlador_1.Registro.PostActualizarUsuarioContrasena);
        this.router.post('/api/Actualizar/Usuario/', RegistrarControlador_1.Registro.PostActualizarUsuario);
        this.router.post('/api/Actualizar/Usuario/SeguridadSocial/', RegistrarControlador_1.Registro.PostActualizarUsuarioSeguridadSocial);
        this.router.post('/api/Actualizar/Usuario/Exclusividad/', RegistrarControlador_1.Registro.PostActualizarUsuarioExclusividad);
        this.router.post('/api/Actualizar/Usuario/Ubicacion/', RegistrarControlador_1.Registro.PostActualizarUsuarioUbicacion);
    }
}
const Regis = new Registrar();
exports.default = Regis.router;
