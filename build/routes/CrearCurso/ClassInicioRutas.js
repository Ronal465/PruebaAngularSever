"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const InicioControlador_1 = require("../../Controladores/Inicio/InicioControlador");
class ListasFormulariosRutas {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        //Ruta Para Obtener una lista de todos los generos registrados
        this.router.post('/api/Inicio/List/Cursos', InicioControlador_1.ObtInicioControlador.ListCursos);
    }
}
const ObtListasFormulariosRutas = new ListasFormulariosRutas();
exports.default = ObtListasFormulariosRutas.router;
