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
exports.ObtInicioControlador = void 0;
const database_1 = __importDefault(require("../../database"));
const JWTValidacionesControlador_1 = require("../Validaciones/JWTValidacionesControlador");
class InicioControlador {
    ListCursosGratis(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const ListaGratis = yield database_1.default.query('Select * from Curso where idCurso in' +
                '(Select idCurso from FiltroCurso where idFiltro = 0 and idTipoFiltro = 1)', function (err, resultGratis, fields) {
                res.json(resultGratis);
            });
        });
    }
    ListCursosEtnicos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var TokenLogin = yield JWTValidacionesControlador_1.ObtJWTValidacionesControlador.VerificarLoginToken(req.body.TokenLogin);
            var idFiltro = TokenLogin.idClasificacionEtnica;
            if (TokenLogin.idClasificacionEtnica != undefined) {
                const ListaEtnica = yield database_1.default.query('Select * from Curso where idCurso in' +
                    '(Select idCurso from FiltroCurso where idFiltro = ? and idTipoFiltro = 3)', [idFiltro], function (err, ListaEtnica, fields) {
                    res.json(ListaEtnica);
                });
            }
            else {
                res.json([]);
            }
        });
    }
    ListCursosExclusivos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var TokenLogin = yield JWTValidacionesControlador_1.ObtJWTValidacionesControlador.VerificarLoginToken(req.body.TokenLogin);
            var idExclusividad = TokenLogin.idExclusividad;
            if (TokenLogin.idExclusividad != undefined) {
                const ListaEtnica = yield database_1.default.query('Select idTipoExclusividad from exclusividad where idExclusividad = ?', [idExclusividad], function (err, result, fields) {
                    return __awaiter(this, void 0, void 0, function* () {
                        var idTipoExclusivo = result[0].idTipoExclusividad;
                        if (idTipoExclusivo == 1) {
                            res.json([]);
                            console.log("Nada");
                        }
                        else {
                            if (idTipoExclusivo == 2) {
                                const ListaExclusivos = yield database_1.default.query('Select * from Curso where idCurso in' +
                                    '(Select idCurso from FiltroCurso where (idFiltro = 2) and idTipoFiltro = 2)', [idTipoExclusivo], function (err, ListaExclusivos, fields) {
                                    res.json(ListaExclusivos);
                                    console.log(ListaExclusivos);
                                });
                            }
                            else if (idTipoExclusivo == 3) {
                                const ListaExclusivos = yield database_1.default.query('Select * from Curso where idCurso in' +
                                    '(Select idCurso from FiltroCurso where (idFiltro = 2 or idFiltro = 3) and idTipoFiltro = 2)', [idTipoExclusivo], function (err, ListaExclusivos, fields) {
                                    res.json(ListaExclusivos);
                                    console.log(ListaExclusivos);
                                });
                            }
                            else if (idTipoExclusivo == 4) {
                                const ListaExclusivos = yield database_1.default.query('Select * from Curso where idCurso in' +
                                    '(Select idCurso from FiltroCurso where (idFiltro = 2 or idFiltro = 3 or idFiltro = 4) and idTipoFiltro = 2)', [idTipoExclusivo], function (err, ListaExclusivos, fields) {
                                    res.json(ListaExclusivos);
                                    console.log(ListaExclusivos);
                                });
                            }
                            else if (idTipoExclusivo == 5) {
                                const ListaExclusivos = yield database_1.default.query('Select * from Curso where idCurso in' +
                                    '(Select idCurso from FiltroCurso where (idFiltro = 2 or idFiltro = 3 or idFiltro = 4 or idFiltro = 5)  and idTipoFiltro = 2)', [idTipoExclusivo], function (err, ListaExclusivos, fields) {
                                    res.json(ListaExclusivos);
                                    console.log(ListaExclusivos);
                                });
                            }
                        }
                    });
                });
            }
            else {
                res.json([]);
            }
        });
    }
    ConsultProfesor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const ProfesorLista = yield database_1.default.query('SELECT idUsuario,Nombres,Apellidos FROM Usuario WHERE idUsuario = ?', [req.body.idProfesor], function (err, Profesor, fields) {
                res.json(Profesor);
            });
        });
    }
    ConsultFiltros(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const ListaFiltros = yield database_1.default.query('SELECT idFiltroCurso,idTipoFiltro,idFiltro FROM filtrocurso WHERE idCurso = ?', [req.body.idCurso], function (err, Filtros, fields) {
                res.json(Filtros);
            });
        });
    }
    ConsultFiltroNombre(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var idTipoFiltro = req.body.idTipoFiltro;
            var idFiltro = req.body.idFiltro;
            if (idTipoFiltro == 1) {
                res.json({ Nombre: "Gratis" });
            }
            else if (idTipoFiltro == 2) {
                const Filtro = yield database_1.default.query('SELECT Nombre FROM tipoexclusividad WHERE idTipoExclusividad = ?', [idFiltro], function (err, NombreFiltro, fields) {
                    res.json({ Nombre: NombreFiltro[0].Nombre });
                });
            }
            else if (idTipoFiltro == 3) {
                const Filtro = yield database_1.default.query('SELECT Nombre FROM clasificacionetnica WHERE idClasificacionEtnica = ?', [idFiltro], function (err, NombreFiltro, fields) {
                    res.json({ Nombre: NombreFiltro[0].Nombre });
                });
            }
        });
    }
}
exports.ObtInicioControlador = new InicioControlador();
