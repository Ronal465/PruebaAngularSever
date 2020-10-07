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
const database_1 = __importDefault(require("../database"));
class ValidacionesControlador {
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
}
exports.ObtValidacionesControlador = new ValidacionesControlador();
