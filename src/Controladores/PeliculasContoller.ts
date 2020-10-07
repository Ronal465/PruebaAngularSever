import { Request, Response } from 'express';
import pool from '../database';
import { Pelicula } from "../Modelos/Pelicula";

class PeliculasContoller {





  public async GetPeliculas(req: Request, res: Response) {

    await pool.query('SELECT * FROM pelicula', function (err, result, fields) {
      if (err) throw err;
      res.json(result);
    });

  }
  public async GetEstadosPeliculas(req: Request, res: Response) {

   

    await pool.query('SELECT * FROM pruebapeliculas.estadopelicula', function (err, result, fields) {
      if (err) throw err;
      res.json(result);
    });

  }
  public async GetPeliculasPorNombre(req: Request, res: Response) {


    var Nombre = "%"+ req.body.Nombre+ "%";

    console.log()

    await pool.query("SELECT * FROM pelicula where Nombre Like ? and idEstadoPelicula =  2  ",[Nombre], function (err, result, fields) {
      if (err) throw err;
      res.json(result);
    });

  }
  public async GetPeliculasPublicas(req: Request, res: Response) {

    await pool.query('SELECT * FROM pelicula where idEstadoPelicula =  2', function (err, result, fields) {
      if (err) throw err;
      res.json(result);
    });

  }
  public async UpdatePeliculas(req: Request, res: Response) {

    var Pelicula ={
      idPelicula                 : req.body.idPelicula,
      Nombre                     : req.body.Nombre,
      Cubierta                   : req.body.Cubierta,
      Descripcion                : req.body.Descripcion,
      Puntaje                    : req.body.Puntaje,
      idEstadoPelicula           : req.body.idEstadoPelicula, 
      FechaModificacion          : req.body.FechaModificacion.slice(0, 10)
    } 
 

    console.log(Pelicula);

    const ActualizarPelicula = await pool.query('Update pelicula set ?   where idPelicula = ? ', [
      Pelicula,
      Pelicula.idPelicula
    ], async function (err, result) {

      if (err) {
        res.status(404).json();
      } else {
        res.json({ Mensaje: "Correctamente Actualizado" });
      }



    });





  }
  public async DeletePeliculas(req: Request, res: Response) {

    var Pelicula: Pelicula = req.body;

    console.log(Pelicula);

    const DeletePelicula = await pool.query('Update pelicula set idEstadoPelicula = 1   where idPelicula = ? ', [
      Pelicula.idPelicula
    ], async function (err, result) {

      if (err) {
        res.status(404).json();
      } else {
        res.json({ Mensaje: "Correctamente Eliminado" });
      }



    });





  }
  public async CreatePeliculas(req: Request, res: Response) {

    var Pelicula ={
      idPelicula                 : req.body.idPelicula,
      Nombre                     : req.body.Nombre,
      Cubierta                   : req.body.Cubierta,
      Descripcion                : req.body.Descripcion,
      Puntaje                    : req.body.Puntaje,
      idEstadoPelicula           : req.body.idEstadoPelicula, 
      FechaCreacion              : req.body.FechaCreacion.slice(0, 10),
      FechaModificacion          : req.body.FechaModificacion.slice(0, 10)
    } 

  
    

    const CrearPelicula = await pool.query('insert into pelicula  set ?', [
      Pelicula
    ], async function (err, result) {

      if (err) {
        res.json(err);
      } else {
        res.json({ Mensaje: "Correctamente Creado" });
      }





    });





  }
  public async RentarPelicula(req: Request, res: Response) {

    var Pelicula :Pelicula = req.body.Pelicula;
    var CodigoUsuario = req.body.Codigo;

    

    const CrearPelicula = await pool.query('insert into PeliculaRentada  set idPelicula = ?  idUsuario = (select idUsuario from usuario where CodigoUsuario = ? ) ', [
      Pelicula.idPelicula,
      CodigoUsuario
    ], async function (err, result) {

      if (err) {
        res.json(err);
      } else {
        res.json({ Mensaje: "Correctamente Creado" });
      }





    });





  }

}


export const ObtPeliculasContoller = new PeliculasContoller();