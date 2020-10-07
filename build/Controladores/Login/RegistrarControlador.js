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
exports.Registro = void 0;
const database_1 = __importDefault(require("../../database"));
const Bcrypts_1 = require("../../Incriptacion/Bcrypts");
const JWTValidacionesControlador_1 = require("../../Controladores/Validaciones/JWTValidacionesControlador");
const ClassEnviarCorreoController_1 = require("../../Controladores/EnviarCorreo/ClassEnviarCorreoController");
class RegistrarControlador {
    RegistrarUsuarioToken(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var TokenRegister = [{
                    idUsuario: null,
                    Nombres: req.body[0].Nombres,
                    Apellidos: req.body[0].Apellidos,
                    FechaNacimiento: req.body[0].FechaNacimiento,
                    idTipoIdentificacion: req.body[0].idTipoIdentificacion,
                    NumeroIdentificacion: req.body[0].NumeroIdentificacion,
                    idProfesion: req.body[0].idProfesion,
                    idClasificacionEtnica: req.body[0].idClasificacionEtnica,
                    CorreoElectronico: req.body[0].CorreoElectronico,
                    Contrasena: Bcrypts_1.encriptacion.encriptar(req.body[0].Contrasena),
                    idTipoGenero: req.body[0].idTipoGenero,
                    idNivelAcademico: req.body[0].idNivelAcademico,
                    Telefono: req.body[0].Telefono,
                    idEstadoValidacion: 2,
                    idTipoUsuario: 2,
                    idTipoPromotor: 1,
                    FechaCreacion: new Date().toJSON().slice(0, 10)
                }, {
                    idSeguridadSocial: null,
                    idTipoSeguridadSocial: req.body[1].idTipoSeguridadSocial,
                    Descripcion: req.body[1].Descripcion
                }, {
                    idUbicacion: null,
                    idPais: req.body[2].idPais,
                    idCiudad: req.body[2].idCiudad,
                    idDepartamento: req.body[2].idDepartamento,
                    Direccion: req.body[2].Direccion,
                }, {
                    idExclusividad: null,
                    idTipoExclusividad: 1,
                    FechaInicio: new Date().toJSON().slice(0, 10),
                    FechaFinal: new Date().toJSON().slice(0, 10)
                }];
            var TokenRegisterDone = yield JWTValidacionesControlador_1.ObtJWTValidacionesControlador.GetCrearTokenRegister({ TokenRegister });
            ClassEnviarCorreoController_1.ObtEnviarCorreoController.CrearUsuarioCorreo(TokenRegisterDone.TokenLogin, req.body[0].CorreoElectronico);
            res.json({ Estado: "Correcto" });
        });
    }
    RegistrarUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var TokenRegister = JWTValidacionesControlador_1.ObtJWTValidacionesControlador.VerificarRegister(req.body.TokenRegister);
            console.log(JSON.stringify(TokenRegister));
            if (TokenRegister.TokenRegister == undefined) {
                res.json({ Estado: "FalloToken" });
            }
            else {
                var idUsuario = 0;
                console.log(TokenRegister);
                const UsuarioCreado = yield database_1.default.query('INSERT INTO usuario set ? ', [TokenRegister.TokenRegister[0]], function (err, result, fields) {
                    return __awaiter(this, void 0, void 0, function* () {
                        if (err) {
                            res.json({ err: err });
                        }
                        else {
                            const consultaempleado = yield database_1.default.query('SELECT idUsuario FROM Usuario WHERE NumeroIdentificacion= ?', [TokenRegister.TokenRegister[0].NumeroIdentificacion], function (err, resulta, fields) {
                                return __awaiter(this, void 0, void 0, function* () {
                                    if (err) {
                                        res.json({ err: err });
                                    }
                                    else if (resulta.length > 0) {
                                        var idUsuario = resulta[0];
                                        const SeguridadSocial = yield database_1.default.query('INSERT INTO SeguridadSocial set ? ,? ', [TokenRegister.TokenRegister[1], idUsuario], function (err, result, fields) {
                                            return __awaiter(this, void 0, void 0, function* () {
                                                if (err) {
                                                    res.json({ err: err });
                                                }
                                                else {
                                                    const Ubicacion = yield database_1.default.query('INSERT INTO Ubicacion set ?,? ', [TokenRegister.TokenRegister[2], idUsuario], function (err, result, fields) {
                                                        return __awaiter(this, void 0, void 0, function* () {
                                                            if (err) {
                                                                res.json({ err: err });
                                                            }
                                                            else {
                                                                const Exclusividad = yield database_1.default.query('INSERT INTO Exclusividad set ?,? ', [TokenRegister.TokenRegister[3], idUsuario], function (err, result, fields) {
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
                                                    });
                                                }
                                            });
                                        });
                                    }
                                });
                            });
                        }
                    });
                });
            }
        });
    }
    RecupearContraseñaToken(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const consultaempleado = yield database_1.default.query('SELECT idUsuario FROM Usuario WHERE CorreoElectronico= ?', [req.body.CorreoElectronico], function (err, result, fields) {
                return __awaiter(this, void 0, void 0, function* () {
                    if (err) {
                        res.json({ err: err });
                    }
                    else if (result.length > 0) {
                        var idUsuario = result[0].idUsuario;
                        var TokenRecuperarContrasenaDone = yield JWTValidacionesControlador_1.ObtJWTValidacionesControlador.GetCrearTokenRecuperarContrasena({ idUsuario });
                        ClassEnviarCorreoController_1.ObtEnviarCorreoController.RecuperarContraseña(TokenRecuperarContrasenaDone.TokenLogin, req.body.CorreoElectronico);
                        res.json({ Estado: "Correcto" });
                    }
                });
            });
        });
    }
    RecupearContraseña(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var TokenRecuperar = JWTValidacionesControlador_1.ObtJWTValidacionesControlador.VerificarRecuperar(req.body.TokenRecuperar);
            if (TokenRecuperar.idUsuario == undefined) {
                res.json({ Estado: "FalloToken" });
            }
            else {
                var Contrasena = { Contrasena: yield Bcrypts_1.encriptacion.encriptar(req.body.Contrasena) };
                const UsuarioCreado = yield database_1.default.query('UPDATE usuario set ?  where idUsuario = ?', [Contrasena, TokenRecuperar.idUsuario], function (err, result, fields) {
                    return __awaiter(this, void 0, void 0, function* () {
                        if (err) {
                            res.json({ err: err });
                        }
                        else {
                            res.json({ "Message": "Que visaje la vida mi so" });
                        }
                    });
                });
            }
        });
    }
    PostCrearProfesor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const CrearProfesor = yield database_1.default.query('INSERT INTO profesorcurso set ? ', [req.body], function (err, result, fields) {
                return __awaiter(this, void 0, void 0, function* () {
                    if (err) {
                        res.json({ err: err });
                    }
                    else {
                        res.json({ Estado: "Correcto" });
                    }
                });
            });
        });
    }
    PostExperienciaProfesor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            req.body.forEach((element) => __awaiter(this, void 0, void 0, function* () {
                const Crearexperienciaprofesor = yield database_1.default.query('INSERT INTO experienciaprofesor set ? ', [element], function (err, result, fields) {
                    return __awaiter(this, void 0, void 0, function* () {
                        if (err) {
                            res.json({ err: err });
                        }
                        else {
                            console.log("Correcto");
                        }
                    });
                });
            }));
        });
    }
    PostActualizarUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('Update  usuario set ? WHERE idUsuario = ? ', [req.body, req.body.idUsuario], function (err, result, fields) {
                if (err)
                    throw err;
                res.json("Correcto");
            });
        });
    }
    PostActualizarUsuarioSeguridadSocial(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('Update  seguridadsocial set ? WHERE idUsuario = ? ', [req.body, req.body.idUsuario], function (err, result, fields) {
                if (err)
                    throw err;
                res.json("Correcto");
            });
        });
    }
    PostActualizarUsuarioExclusividad(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('Update  exclusividad set ? WHERE idUsuario = ? ', [req.body, req.body.idUsuario], function (err, result, fields) {
                if (err)
                    throw err;
                res.json("Correcto");
            });
        });
    }
    PostActualizarUsuarioUbicacion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('Update  ubicacion set ? WHERE idUsuario = ? ', [req.body, req.body.idUsuario], function (err, result, fields) {
                if (err)
                    throw err;
                res.json("Correcto");
            });
        });
    }
    PostActualizarUsuarioContrasena(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var Contrasena = { Contrasena: yield Bcrypts_1.encriptacion.encriptar(req.body.Contrasena) };
            console.log(req.body);
            console.log(Contrasena);
            yield database_1.default.query('Update  usuario set ? WHERE idUsuario = ? ', [{ Contrasena: Contrasena.Contrasena }, req.body.idUsuario], function (err, result, fields) {
                if (err)
                    throw err;
                res.json("Correcto");
            });
        });
    }
}
exports.Registro = new RegistrarControlador();
