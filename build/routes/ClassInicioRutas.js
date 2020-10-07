"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const PeliculasContoller_1 = require("../../Controladores/MirarCurso/PeliculasContoller");
class ListasFormulariosRutas {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        //Ruta Para Obtener una lista de todos los generos registrados
        this.router.get('/api/get/Peliculas', PeliculasContoller_1.ObtPeliculasContoller.GetPeliculas);
        this.router.post('/api/Crear/Peliculas', PeliculasContoller_1.ObtPeliculasContoller.CreatePeliculas);
        this.router.put('/api/Actualizar/Peliculas', PeliculasContoller_1.ObtPeliculasContoller.UpdatePeliculas);
        this.router.delete('/api/Delete/Peliculas', PeliculasContoller_1.ObtPeliculasContoller.DeletePeliculas);
    }
}
const ObtListasFormulariosRutas = new ListasFormulariosRutas();
exports.default = ObtListasFormulariosRutas.router;
