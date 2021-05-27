import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Eventos } from '../modelos/eventos.model';
import { GLOBALSERVICIOS } from './globalservicios';

@Injectable({
  providedIn: 'root'
})
export class EventosService {
  public url: String;
  public token: any;
  public Encabezado = new HttpHeaders().set('Content-Type','application/json')

  constructor(public _http: HttpClient) { 
    this.url = GLOBALSERVICIOS.url;
  }

  //funcion para ver todas los eventos
  VerTodosLosEventos(token: string): Observable<any>{
    let EncabezadoToken = this.Encabezado.set('Authorization',token)
    return this._http.get(this.url+"VerTodosLosDeEventos",{headers: EncabezadoToken})
  }

  //funcion para ver los eventos de un solo hotel
  VerTodosLosEventosDeUnHotel():Observable<any>{
    let EncabezadoToken = this.Encabezado.set('Authorization',this.getToken())
    return this._http.get(this.url+"VerEventosPorHotel/"+this.getHotel(),{headers: EncabezadoToken})
  }

  //funcion para ver solo un eventos
  VerSoloUnEvento(id: string): Observable<any>{
    let EncabezadoToken = this.Encabezado.set('Authorization',this.getToken())
    return this._http.get(this.url+"VerEventoPorId/"+id,{headers: EncabezadoToken})
  }

   //funcion para ver solo un eventos
   VerSoloUnEventop(): Observable<any>{
    let EncabezadoToken = this.Encabezado.set('Authorization',this.getToken())
    return this._http.get(this.url+"VerEventoPorId/"+this.getEvento(),{headers: EncabezadoToken})
  }

  //funcion para eliminar el eventos
  EliminarEventos(): Observable<any>{
    let EncabezadoToken = this.Encabezado.set('Authorization',this.getToken())
    return this._http.delete(this.url+"EliminarEvento/"+this.getUsuario()+"/"+this.getEvento(),{headers: EncabezadoToken})
  }

  //funcion para agregar un nuevo evento mandando el usuario administrador
  RegistrarUnNuevoEvento(eventos: Eventos): Observable<any>{
    eventos.iddelhotel = this.getHotel();
    let params = JSON.stringify(eventos);
    let EncabezadoToken = this.Encabezado.set('Authorization',this.getToken())
    return this._http.post(this.url+"AgregarEvento/"+this.getUsuario(), params, {headers: EncabezadoToken})
  }

  //funcion para editar el evento
  EditarEvento(evento: Eventos): Observable<any>{
    let params = JSON.stringify(evento);
    let EncabezadoToken = this.Encabezado.set('Authorization',this.getToken())
    return this._http.put(this.url+"EditarEvento/"+this.getUsuario()+"/"+this.getEvento(), params ,{headers: EncabezadoToken})
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

  getEvento(){
    var token2 = localStorage.getItem('evento');
    if(token2 != 'undefined'){
      this.token = token2;
    }else{
      this.token = null;
    }
    return this.token;
  }
}
