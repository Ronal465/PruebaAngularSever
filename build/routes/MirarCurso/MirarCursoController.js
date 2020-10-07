"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObtMirarCursoContrller = void 0;
const database_1 = __importDefault(require("../../database"));
const JWTValidacionesControlador_1 = require("../Validaciones/JWTValidacionesControlador");
class MirarCursoContrller {
    ObtenerMisCursos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var TokenLogin = JWTValidacionesControlador_1.ObtJWTValidacionesControlador.VerificarLoginToken(req.body.TokenLogin);
            if (TokenLogin.idUsuario == undefined) {
            }
            else {
                const CrearCurso = yield database_1.default.query('Select FROM CursoUsuario where idUsuario = ? ', [TokenLogin.idUsuario], function (err, result, fields) {
                    return __awaiter(this, void 0, void 0, function* () {
                        if (err) {
                            res.json([]);
                        }
                        else {
                            res.json(result);
                        }
                    });
                });
            }
        });
    }
    CreateFiltrosCursoExclusivos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var TokenLogin = JWTValidacionesControlador_1.ObtJWTValidacionesControlador.VerificarLoginToken(req.body.TokenLogin);
            if (TokenLogin.idUsuario == undefined) {
            }
            else if (TokenLogin.idTipoUsuario == "3") {
                const CrearCurso = yield database_1.default.query('DELETE FROM filtrocurso where idCurso = ? ', [req.body.idCurso], function (err, result, fields) {
                    return __awaiter(this, void 0, void 0, function* () {
                        if (err) {
                            res.json({ err: err });
                        }
                        else {
                            res.json({ Estado: "Correcto" });
                        }
                    });
                });
            }
        });
    }
    PostCrearCursoCompleto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Hola");
            yield database_1.default.query('Update Curso set idEstadoCurso =  2 WHERE idCurso = ? ', [req.body.idCurso], function (err, result, fields) {
                if (err)
                    throw err;
                res.json("Correcto");
            });
        });
    }
}
exports.ObtMirarCursoContrller = new MirarCursoContrller();
