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
        this.router.get('/api/Inicio/List/Cursos', InicioControlador_1.ObtInicioControlador.ListCursosGratis);
        this.router.post('/api/Inicio/List/Cursos/Etnicos', InicioControlador_1.ObtInicioControlador.ListCursosEtnicos);
        this.router.post('/api/Inicio/List/Cursos/Exclusivo', InicioControlador_1.ObtInicioControlador.ListCursosExclusivos);
        this.router.post('/api/Inicio/Get/Profesor', InicioControlador_1.ObtInicioControlador.ConsultProfesor);
        this.router.post('/api/Inicio/Get/Filtros', InicioControlador_1.ObtInicioControlador.ConsultFiltros);
        this.router.post('/api/Inicio/Get/Nombre/Filtro', InicioControlador_1.ObtInicioControlador.ConsultFiltroNombre);
    }
}
const ObtListasFormulariosRutas = new ListasFormulariosRutas();
exports.default = ObtListasFormulariosRutas.router;
