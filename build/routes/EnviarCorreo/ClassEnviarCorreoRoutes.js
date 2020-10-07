"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ClassEnviarCorreoController_1 = require("../../Controladores/EnviarCorreo/ClassEnviarCorreoController");
class CorreoRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.put('/api/Validar/CorreoElectronico/:CorreoElectronico', ClassEnviarCorreoController_1.ObtEnviarCorreoController.ValidarCorreo);
    }
}
const ObtEnviarCorreoRoutes = new CorreoRoutes();
exports.default = ObtEnviarCorreoRoutes.router;
