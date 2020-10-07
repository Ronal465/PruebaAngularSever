"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const PeliculasContoller_1 = require("../Controladores/PeliculasContoller");
class ListasFormulariosRutas {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        //Ruta Para Obtener una lista de todos los generos registrados
        this.router.get('/api/get/Peliculas', PeliculasContoller_1.ObtPeliculasContoller.GetPeliculas);
        this.router.post('/api/get/Peliculas', PeliculasContoller_1.ObtPeliculasContoller.GetPeliculasPorNombre);
        this.router.get('/api/get/Peliculas/Publicas', PeliculasContoller_1.ObtPeliculasContoller.GetPeliculasPublicas);
        this.router.post('/api/Crear/Peliculas', PeliculasContoller_1.ObtPeliculasContoller.CreatePeliculas);
        this.router.put('/api/Actualizar/Peliculas', PeliculasContoller_1.ObtPeliculasContoller.UpdatePeliculas);
        this.router.put('/api/Delete/Peliculas', PeliculasContoller_1.ObtPeliculasContoller.DeletePeliculas);
        this.router.get('/api/get/Peliculas/Estados/Peliculas', PeliculasContoller_1.ObtPeliculasContoller.GetEstadosPeliculas);
        this.router.post('/api/Rentar/Pelicula', PeliculasContoller_1.ObtPeliculasContoller.RentarPelicula);
    }
}
const ObtListasFormulariosRutas = new ListasFormulariosRutas();
exports.default = ObtListasFormulariosRutas.router;
