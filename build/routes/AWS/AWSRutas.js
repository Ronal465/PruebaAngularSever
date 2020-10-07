"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AWSControlador_1 = require("../../Controladores/AWS/AWSControlador");
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
class CorreoRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/api/Upload/File', upload.single('video'), AWSControlador_1.ObtAWSControlador.SubirVideo);
        this.router.post('/api/Upload/img', upload.single('img'), AWSControlador_1.ObtAWSControlador.SubirImg);
        this.router.post('/api/Upload/img/profesor', upload.single('img'), AWSControlador_1.ObtAWSControlador.SubirImgProfesor);
    }
}
const ObtEnviarCorreoRoutes = new CorreoRoutes();
exports.default = ObtEnviarCorreoRoutes.router;
