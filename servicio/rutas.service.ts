import { Injectable } from '@angular/core';
 
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'
import { Rutas} from '../model/rutas';

@Injectable()
export class RutasService {
  rutasList: AngularFireList<any>;
  selectedruta: Rutas = new Rutas();
  constructor(private firebase :AngularFireDatabase ) { }
 
  getData(){
    this.rutasList = this.firebase.list('rutas');
    return this.rutasList;
  }
 
  insertRuta(rutas : Rutas)
  {
    this.rutasList.push({
      nombre: rutas.nombre,
      descripcion: rutas.descripcion,
      precio: rutas.precio
    });
  }
  updateRuta(rutas : Rutas){
    this.rutasList.update(rutas.$key,
      {
      nombre: rutas.nombre,
      descripcion: rutas.descripcion,
      precio: rutas.precio
      });
  }
}