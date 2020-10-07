"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ClassListarFormulariosControlador_1 = require("../../Controladores/Login/ClassListarFormulariosControlador");
class ListasFormularios {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        //Ruta Para Obtener una lista de todos los generos registrados
        this.router.get('/api/list/TipoGenero', ClassListarFormulariosControlador_1.ObtListarFormulariosControlador.GetListTipoGenero);
        this.router.get('/api/list/Profesion', ClassListarFormulariosControlador_1.ObtListarFormulariosControlador.GetListProfesion);
        this.router.get('/api/list/ClasificacionEtnica', ClassListarFormulariosControlador_1.ObtListarFormulariosControlador.GetListEtnia);
        this.router.get('/api/list/TipoIdentificacion', ClassListarFormulariosControlador_1.ObtListarFormulariosControlador.GetListTipoIdentificacion);
        this.router.get('/api/list/EstadoValidacion', ClassListarFormulariosControlador_1.ObtListarFormulariosControlador.GetListEstadoValidacion);
        this.router.get('/api/list/TipoUsuario', ClassListarFormulariosControlador_1.ObtListarFormulariosControlador.GetListTipoUsuario);
        this.router.get('/api/list/TipoSeguridadSocial', ClassListarFormulariosControlador_1.ObtListarFormulariosControlador.GetListTipoSeguridadSocial);
        this.router.get('/api/list/Pais', ClassListarFormulariosControlador_1.ObtListarFormulariosControlador.GetListPaises);
        this.router.put('/api/list/Departamento/:idPais', ClassListarFormulariosControlador_1.ObtListarFormulariosControlador.GetListDepartamento);
        this.router.put('/api/list/Ciudad/:idDepartamento', ClassListarFormulariosControlador_1.ObtListarFormulariosControlador.GitListCiudad);
        this.router.get('/api/list/FuncionTipoUsuario/:idTipoUsuario', ClassListarFormulariosControlador_1.ObtListarFormulariosControlador.GetListFuncionesTipoUsuario);
        this.router.get('/api/list/TipoFuncionarioPublico', ClassListarFormulariosControlador_1.ObtListarFormulariosControlador.GetListTipoPromotor);
        this.router.get('/api/list/TipoExclusividad', ClassListarFormulariosControlador_1.ObtListarFormulariosControlador.GetListTipoExclusividad);
    }
}
const ObtListasFormularios = new ListasFormularios();
exports.default = ObtListasFormularios.router;
