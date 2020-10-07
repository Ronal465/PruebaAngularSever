"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ClassListarFormulariosControlador_1 = require("../Login/ClassListarFormulariosControlador");
class ListasFormularios {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        //Ruta Para Obtener una lista de todos los generos registrados
        this.router.get('/api/list/TipoGenero', ClassListarFormulariosControlador_1.ObtListarFormulariosControlador.GetListTipoGenero);
    }
}
const ObtListasFormularios = new ListasFormularios();
exports.default = ObtListasFormularios.router;
