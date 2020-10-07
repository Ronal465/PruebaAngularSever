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
exports.Authsc = void 0;
const database_1 = __importDefault(require("../../database"));
const JWTValidacionesControlador_1 = require("../../Controladores/Validaciones/JWTValidacionesControlador");
const Bcrypts_1 = require("../../Incriptacion/Bcrypts");
class Auths {
    Login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var login = {
                CorreoElectronico: req.body.CorreoElectronico,
                Contrasena: yield Bcrypts_1.encriptacion.encriptar(req.body.Contrasena)
            };
            const consultUsuarioLogin = yield database_1.default.query('SELECT idUsuario,Nombres,Apellidos,FechaNacimiento,idProfesion' +
                ',idClasificacionEtnica,idTipoGenero,idNivelAcademico,idTipoUsuario' +
                ',idTipoPromotor,idEstadoValidacion,Contrasena FROM Usuario WHERE CorreoElectronico= ? ', [login.CorreoElectronico], function (err, result, fields) {
                return __awaiter(this, void 0, void 0, function* () {
                    if (err) {
                        throw err;
                    }
                    ;
                    if (result.length > 0) {
                        var idUbicacion;
                        var idExclusividad;
                        yield database_1.default.query('SELECT idUbicacion FROM ubicacion WHERE idUsuario = ? ', [result[0].idUsuario], function (err, resulta, fields) {
                            return __awaiter(this, void 0, void 0, function* () {
                                if (err)
                                    throw err;
                                yield database_1.default.query('SELECT idExclusividad FROM exclusividad WHERE idUsuario = ? ', [result[0].idUsuario], function (err, resultad, fields) {
                                    if (err)
                                        throw err;
                                    idExclusividad = resultad[0].idExclusividad;
                                    idUbicacion = resulta[0].idUbicacion;
                                    if (login.Contrasena == result[0].Contrasena) {
                                        if (result[0].idEstadoValidacion == 1 || result[0].idEstadoValidacion == 2) {
                                            var data = {
                                                idUsuario: result[0].idUsuario,
                                                Nombres: result[0].Nombres,
                                                Apellidos: result[0].Apellidos,
                                                FechaNacimiento: result[0].FechaNacimiento,
                                                idProfesion: result[0].idProfesion,
                                                idClasificacionEtnica: result[0].idClasificacionEtnica,
                                                idTipoGenero: result[0].idTipoGenero,
                                                idExclusividad: idUbicacion,
                                                idNivelAcademico: result[0].idNivelAcademico,
                                                idTipoUsuario: result[0].idTipoUsuario,
                                                idUbicacion: idUbicacion,
                                                idTipoPromotor: result[0].idTipoPromotor
                                            };
                                            console.log(JWTValidacionesControlador_1.ObtJWTValidacionesControlador.GetCrearTokenLogin(data));
                                            return res.json(JWTValidacionesControlador_1.ObtJWTValidacionesControlador.GetCrearTokenLogin(data));
                                        }
                                        else {
                                            return res.json({ Estado: "Bloqueado" });
                                        }
                                    }
                                    else {
                                        return res.json({ Estado: "FalloContraseña" });
                                    }
                                });
                            });
                        });
                    }
                    else {
                        return res.json({ Estado: "FalloCorreo" });
                    }
                });
            });
        });
    }
}
exports.Authsc = new Auths();
