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
exports.ObtListarFormulariosControlador = void 0;
const database_1 = __importDefault(require("../../database"));
const JWTValidacionesControlador_1 = require("../../Controladores/Validaciones/JWTValidacionesControlador");
class ListarFormulariosControlador {
    // Numero 1
    GetListProfesion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('SELECT * FROM Profesion', function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    // Numero 2
    GetListTipoGenero(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('SELECT * FROM TipoGenero', function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    // Numero 3
    GetListNivelAcademico(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('SELECT * FROM nivelacademico', function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    // Numero 4
    GetListTipoIdentificacion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('SELECT * FROM TipoIdentificacion', function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    // Numero 5 
    GetListEstadoValidacion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('SELECT * FROM EstadoValidacion', function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    //  Numero 6
    GetListTipoUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('SELECT * FROM TipoUsuario', function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    // Numero 7
    GetListTipoSeguridadSocial(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('SELECT * FROM TipoSeguridadSocial', function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    // Numero 8
    GetListPaises(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('SELECT * FROM Pais', function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    // Numero 9
    GetListDepartamento(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idPais } = req.params;
            const consultaempleado = yield database_1.default.query('SELECT * FROM Departamento WHERE idPais= ?', [idPais], function (err, result, fields) {
                if (err) {
                    throw err;
                }
                ;
                if (result.length > 0) {
                    return res.json(result);
                }
                else {
                    res.status(404).json({ Estado: "Fallo" });
                }
            });
        });
    }
    // Numero 10
    GitListCiudad(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idDepartamento } = req.params;
            const consultaempleado = yield database_1.default.query('SELECT * FROM Ciudad WHERE idDepartamento= ?', [idDepartamento], function (err, result, fields) {
                if (err) {
                    throw err;
                }
                ;
                if (result.length > 0) {
                    return res.json(result);
                }
                else {
                    res.status(404).json({ Estado: "Fallo" });
                }
            });
        });
    }
    // Numero 11
    GetListFuncionesTipoUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idTipoUsuario } = req.params;
            const consultaempleado = yield database_1.default.query('SELECT idFuncionTipoUsuario,Nombre FROM FuncionTipoUsuario WHERE idTipoUsuario= ?', [idTipoUsuario], function (err, result, fields) {
                if (err) {
                    throw err;
                }
                ;
                if (result.length > 0) {
                    var JSonAcomodado = result;
                    res.json(result);
                }
                else {
                    res.status(404).json({ Estado: "Fallo" });
                }
            });
        });
    }
    // Numero 12
    GetListTipoPromotor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('SELECT * FROM TipoPromotor', function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    // Numero 13
    GetListTipoExclusividad(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('SELECT * FROM TipoExclusividad', function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    // Numero 18
    GetListEtnia(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('SELECT * FROM ClasificacionEtnica', function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    // Numero 
    GetListPromotor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('SELECT * FROM tipopromotor', function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    // Numero
    GetListTiposUsuarios(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('SELECT * FROM tipousuario where idtipousuario != 1', function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    // Numero
    GetUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idUsuario } = req.params;
            yield database_1.default.query('SELECT * FROM usuario  where  idUsuario = ?', [idUsuario], function (err, result, fields) {
                if (err) {
                    throw err;
                }
                ;
                if (result.length > 0) {
                    return res.json(result[0]);
                }
                else {
                    res.status(404).json({ text: "El Usuario No Existe" });
                }
            });
        });
    }
    // Numero
    GetListUsuarios(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var TokenLogin = yield JWTValidacionesControlador_1.ObtJWTValidacionesControlador.VerificarLoginToken(req.body.TokenLogin);
            console.log(TokenLogin);
            if (TokenLogin.idTipoUsuario == 4) {
                yield database_1.default.query('SELECT * FROM usuario', function (err, result, fields) {
                    if (err) {
                        throw err;
                    }
                    ;
                    if (result.length > 0) {
                        return res.json(result);
                    }
                });
            }
            else {
                return res.json({});
            }
        });
    }
    GetUsaurioUbicacion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idUsuario } = req.params;
            yield database_1.default.query('SELECT * FROM ubicacion  where  idUsuario = ?', [idUsuario], function (err, result, fields) {
                if (err) {
                    throw err;
                }
                ;
                if (result.length > 0) {
                    return res.json(result[0]);
                }
                else {
                    res.status(404).json({ text: "El Usuario No Existe" });
                }
            });
        });
    }
    GetUsaurioSeguridadSocial(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idUsuario } = req.params;
            yield database_1.default.query('SELECT * FROM seguridadsocial  where  idUsuario = ?', [idUsuario], function (err, result, fields) {
                if (err) {
                    throw err;
                }
                ;
                if (result.length > 0) {
                    return res.json(result[0]);
                }
                else {
                    res.status(404).json({ text: "El Usuario No Existe" });
                }
            });
        });
    }
    GetUsaurioExclusividad(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idUsuario } = req.params;
            yield database_1.default.query('SELECT * FROM exclusividad  where  idUsuario = ?', [idUsuario], function (err, result, fields) {
                if (err) {
                    throw err;
                }
                ;
                if (result.length > 0) {
                    return res.json(result[0]);
                }
                else {
                    res.status(404).json({ text: "El Usuario No Existe" });
                }
            });
        });
    }
    GetUsuarioToken(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body.TokenLogin);
            var TokenLogin = yield JWTValidacionesControlador_1.ObtJWTValidacionesControlador.VerificarLoginToken(req.body.TokenLogin);
            console.log(TokenLogin);
            res.json({ idUsuario: TokenLogin.idUsuario });
        });
    }
}
exports.ObtListarFormulariosControlador = new ListarFormulariosControlador();
