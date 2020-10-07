import { Router } from 'express';

import { ObtPeliculasContoller } from "../Controladores/PeliculasContoller";



class ListasFormulariosRutas {

        public router: Router = Router();

        constructor() {
                this.config();

        }

        config(): void {

                //Ruta Para Obtener una lista de todos los generos registrados
              this.router.get('/api/get/Peliculas', ObtPeliculasContoller.GetPeliculas);
              this.router.post('/api/get/Peliculas', ObtPeliculasContoller.GetPeliculasPorNombre);
              this.router.get('/api/get/Peliculas/Publicas', ObtPeliculasContoller.GetPeliculasPublicas);
              this.router.post('/api/Crear/Peliculas', ObtPeliculasContoller.CreatePeliculas);
              this.router.put('/api/Actualizar/Peliculas', ObtPeliculasContoller.UpdatePeliculas);
              this.router.put('/api/Delete/Peliculas', ObtPeliculasContoller.DeletePeliculas);
              this.router.get('/api/get/Peliculas/Estados/Peliculas', ObtPeliculasContoller.GetEstadosPeliculas);
              this.router.post('/api/Rentar/Pelicula', ObtPeliculasContoller.RentarPelicula);
              
               
              
        }
}


const ObtListasFormulariosRutas = new ListasFormulariosRutas();

export default ObtListasFormulariosRutas.router;