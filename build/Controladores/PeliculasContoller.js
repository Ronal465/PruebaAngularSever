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
exports.ObtPeliculasContoller = void 0;
const database_1 = __importDefault(require("../database"));
class PeliculasContoller {
    GetPeliculas(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('SELECT * FROM pelicula', function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    GetEstadosPeliculas(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('SELECT * FROM pruebapeliculas.estadopelicula', function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    GetPeliculasPorNombre(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var Nombre = "%" + req.body.Nombre + "%";
            console.log();
            yield database_1.default.query("SELECT * FROM pelicula where Nombre Like ? and idEstadoPelicula =  2  ", [Nombre], function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    GetPeliculasPublicas(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('SELECT * FROM pelicula where idEstadoPelicula =  2', function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    UpdatePeliculas(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var Pelicula = {
                idPelicula: req.body.idPelicula,
                Nombre: req.body.Nombre,
                Cubierta: req.body.Cubierta,
                Descripcion: req.body.Descripcion,
                Puntaje: req.body.Puntaje,
                idEstadoPelicula: req.body.idEstadoPelicula,
                FechaModificacion: req.body.FechaModificacion.slice(0, 10)
            };
            console.log(Pelicula);
            const ActualizarPelicula = yield database_1.default.query('Update pelicula set ?   where idPelicula = ? ', [
                Pelicula,
                Pelicula.idPelicula
            ], function (err, result) {
                return __awaiter(this, void 0, void 0, function* () {
                    if (err) {
                        res.status(404).json();
                    }
                    else {
                        res.json({ Mensaje: "Correctamente Actualizado" });
                    }
                });
            });
        });
    }
    DeletePeliculas(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var Pelicula = req.body;
            console.log(Pelicula);
            const DeletePelicula = yield database_1.default.query('Update pelicula set idEstadoPelicula = 1   where idPelicula = ? ', [
                Pelicula.idPelicula
            ], function (err, result) {
                return __awaiter(this, void 0, void 0, function* () {
                    if (err) {
                        res.status(404).json();
                    }
                    else {
                        res.json({ Mensaje: "Correctamente Eliminado" });
                    }
                });
            });
        });
    }
    CreatePeliculas(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var Pelicula = {
                idPelicula: req.body.idPelicula,
                Nombre: req.body.Nombre,
                Cubierta: req.body.Cubierta,
                Descripcion: req.body.Descripcion,
                Puntaje: req.body.Puntaje,
                idEstadoPelicula: req.body.idEstadoPelicula,
                FechaCreacion: req.body.FechaCreacion.slice(0, 10),
                FechaModificacion: req.body.FechaModificacion.slice(0, 10)
            };
            const CrearPelicula = yield database_1.default.query('insert into pelicula  set ?', [
                Pelicula
            ], function (err, result) {
                return __awaiter(this, void 0, void 0, function* () {
                    if (err) {
                        res.json(err);
                    }
                    else {
                        res.json({ Mensaje: "Correctamente Creado" });
                    }
                });
            });
        });
    }
    RentarPelicula(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var Pelicula = req.body.Pelicula;
            var CodigoUsuario = req.body.Codigo;
            const CrearPelicula = yield database_1.default.query('insert into PeliculaRentada  set idPelicula = ?  idUsuario = (select idUsuario from usuario where CodigoUsuario = ? ) ', [
                Pelicula.idPelicula,
                CodigoUsuario
            ], function (err, result) {
                return __awaiter(this, void 0, void 0, function* () {
                    if (err) {
                        res.json(err);
                    }
                    else {
                        res.json({ Mensaje: "Correctamente Creado" });
                    }
                });
            });
        });
    }
}
exports.ObtPeliculasContoller = new PeliculasContoller();
