import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Habitacion } from '../modelos/habitacionesmodelo';
import { GLOBALSERVICIOS } from './globalservicios';


@Injectable({
  providedIn: 'root'
})
export class HabitacionesService {
  public url: String;
  public Encabezado = new HttpHeaders().set('Content-Type','application/json')
  token: any;

  constructor(public _http: HttpClient) { 
    this.url = GLOBALSERVICIOS.url;
  }

  //funcion para ver todas las habitaciones
  VerTodasLasHabitaciones(token: string): Observable<any>{
    let EncabezadoToken = this.Encabezado.set('Authorization',token)
    return this._http.get(this.url+"VerTodasLasHabitaciones",{headers: EncabezadoToken})
  }

  //Ver habitaciones del hotel
  VerHabitacionesPorHotel():Observable<any>{
    let EncabezadoToken = this.Encabezado.set('Authorization',this.getToken())
    return this._http.get(this.url+"VerHabitacionPorHotel/"+this.getHotel(),{headers: EncabezadoToken})
  }

  //funcion para traer un usuario por id
  VerHabitacionPorId(id: string): Observable<any>{
    let EncabezadoToken = this.Encabezado.set('Authorization',this.getToken())
    return this._http.get(this.url+"VerHabitacionPorid/"+id,{headers: EncabezadoToken})
  }

  //funcion para traer un usuario por id
  VerHabitacionPorIdp(): Observable<any>{
    let EncabezadoToken = this.Encabezado.set('Authorization',this.getToken())
    return this._http.get(this.url+"VerHabitacionPorid/"+this.getHabitacion(),{headers: EncabezadoToken})
  }

  //agregar una nueva habitaciones
  AgregarUnaNuevaHabitacion(habitaciones: Habitacion): Observable<any>{
    habitaciones.IdHotel = this.getHotel();
    let params = JSON.stringify(habitaciones);
    let EncabezadoToken = this.Encabezado.set('Authorization',this.getToken())
    return this._http.post(this.url+"AgregarUnHabitacion/"+this.getUsuario(), params, {headers: EncabezadoToken})
  }

  //eliminar una habitaciones
  EliminarUnaHabitacion(): Observable<any>{
    let EncabezadoToken = this.Encabezado.set('Authorization',this.getToken())
    return this._http.delete(this.url+"EliminarHabitacion/"+this.getUsuario()+"/"+this.getHabitacion(), {headers: EncabezadoToken})
  }

  //funcion editar habitacionesmodelo
  EditarUnaHabitacion(habitaciones: Habitacion): Observable<any>{
    let params = JSON.stringify(habitaciones);
    let EncabezadoToken = this.Encabezado.set('Authorization',this.getToken())
    return this._http.put(this.url+"EditarHabitacion/"+this.getUsuario()+"/"+this.getHabitacion(), params, {headers: EncabezadoToken})
  }

  //obtenemos el token
  getToken(){
    var token2 = localStorage.getItem('token');
    if(token2 != 'undefined'){
      this.token = token2;
    }else{
      this.token = null;
    }
    return this.token;
  }

  //obtenemos el id del usuario registrado
  getUsuario(){
    var token2 = localStorage.getItem('Identidad');
    if(token2 != 'undefined'){
      this.token = token2;
    }else{
      this.token = null;
    }
    return this.token;
  }

  //obtenemos el id de hotel
  getHotel(){
    var token2 = localStorage.getItem('hotel');
    if(token2 != 'undefined'){
      this.token = token2;
    }else{
      this.token = null;
    }
    return this.token;
  }

  getHabitacion(){
    var token2 = localStorage.getItem('habitacion');
    if(token2 != 'undefined'){
      this.token = token2;
    }else{
      this.token = null;
    }
    return this.token;
  }
}
