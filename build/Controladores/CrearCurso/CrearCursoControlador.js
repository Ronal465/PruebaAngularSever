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
exports.ObtCrearCurso = void 0;
const database_1 = __importDefault(require("../../database"));
const JWTValidacionesControlador_1 = require("../Validaciones/JWTValidacionesControlador");
class CrearCursoControlador {
    PostCrearCurso(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var TokenLogin = JWTValidacionesControlador_1.ObtJWTValidacionesControlador.VerificarLoginToken(req.body.TokenLogin);
            if (TokenLogin.idUsuario == undefined) {
                res.json(req.body);
            }
            else if (TokenLogin.idTipoUsuario == "3") {
                req.body.Curso.idProfesor = TokenLogin.idUsuario;
                console.log(req.body.Curso);
                const CrearCurso = yield database_1.default.query('INSERT INTO curso set ? ', [req.body.Curso], function (err, result, fields) {
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
    PostCrearSeccion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const CrearCurso = yield database_1.default.query('INSERT INTO seccioncurso set ? ', [req.body], function (err, result, fields) {
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
    PutEditarCurso(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('Update  Curso set ? WHERE idCurso = ? ', [req.body, req.body.idCurso], function (err, result, fields) {
                if (err)
                    throw err;
                res.json("Correcto");
            });
        });
    }
    PutEditarSeccion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('Update  seccioncurso set ? WHERE idSeccionCurso = ? ', [req.body, req.body.idSeccionCurso], function (err, result, fields) {
                if (err)
                    throw err;
                res.json("Correcto");
            });
        });
    }
    GetListCursos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var TokenLogin = JWTValidacionesControlador_1.ObtJWTValidacionesControlador.VerificarLoginToken(req.body.TokenLogin);
            if (TokenLogin.idUsuario == undefined) {
            }
            else if (TokenLogin.idTipoUsuario == "3") {
                yield database_1.default.query('SELECT * FROM Curso WHERE idEstadoCurso = 1 and idProfesor = ? ', [TokenLogin.idUsuario], function (err, result, fields) {
                    if (err)
                        throw err;
                    res.json(result);
                });
            }
        });
    }
    GetListSeccioness(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idCurso } = req.params;
            yield database_1.default.query('SELECT * FROM seccioncurso WHERE idCurso = ?', { idCurso }, function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    EliminarFiltrosCurso(req, res) {
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
    CreateFiltrosCursoEtnicos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var TokenLogin = JWTValidacionesControlador_1.ObtJWTValidacionesControlador.VerificarLoginToken(req.body.TokenLogin);
            if (TokenLogin.idUsuario == undefined) {
            }
            else if (TokenLogin.idTipoUsuario == "3") {
                console.log(req.body);
                const CrearCurso = yield database_1.default.query('insert into filtrocurso set ? ', [req.body.Filtro], function (err, result, fields) {
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
exports.ObtCrearCurso = new CrearCursoControlador();
