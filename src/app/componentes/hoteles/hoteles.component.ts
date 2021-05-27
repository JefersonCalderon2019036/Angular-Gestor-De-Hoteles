import { Component, OnInit } from '@angular/core';
import { Eventos } from 'src/app/modelos/eventos.model';
import { Habitacion } from 'src/app/modelos/habitacionesmodelo';
import { Hoteles } from 'src/app/modelos/hotelesmodelo';
import { EventosService } from 'src/app/servicios/eventos.service';
import { HabitacionesService } from 'src/app/servicios/habitaciones.service';
import { HotelesService } from 'src/app/servicios/hoteles.service';

@Component({
  selector: 'app-hoteles',
  templateUrl: './hoteles.component.html',
  styleUrls: ['./hoteles.component.scss'],
  providers: [HotelesService, HabitacionesService, EventosService]
})
export class HotelesComponent implements OnInit {
  public IdEventoModel: Eventos;
  public IdHabitacionModel: Habitacion;
  public IdHotelModel: Hoteles;
  public habitaciones: any;
  public eventos: any;
  public eventosnull: any;
  public hotel: any;
  public hotelid: any;
  public habitacion: any;
  public token: any;


  constructor(private _HotelesService:  HotelesService, private _HabitacionesServices: HabitacionesService, private _EventosServices: EventosService) { 
    this.IdEventoModel = new Eventos( "","","","",0,"","",0,[{textoComentario: "", calificacionhabitacion: 0, calificacionservicio: 0,idUsuarioComentario: ""}],0,0,0,0);
    this.IdHabitacionModel = new Habitacion("","","","",0,0,"","",0,[{textoComentario: "", calificacionhabitacion: 0, calificacionservicio: 0,idUsuarioComentario: ""}],0,0,0,0);
    this.IdHotelModel = new Hoteles("","","","","","","","");
  }

  ngOnInit(): void {
    this.VerHotel();
    this.VerHabitacionesPorElHotel();
    this.VerTodosLosEventros();
  }
  
  VerHotel(){
    this._HotelesService.VerElHotel().subscribe(
      Response => {
        this.hotel = Response.hotelencontrado;
      }, error => {
        console.log(<any>error)
      }
    )
  }

  VerHabitacionesPorElHotel(){
    this._HabitacionesServices.VerHabitacionesPorHotel().subscribe(
      response => {
        this.habitaciones = response.hotelencontrado;
        console.log(response)
      }, error => {
        console.log(<any>error);
      }
    )
  }

  VerTodosLosEventros(){
    this._EventosServices.VerTodosLosEventosDeUnHotel().subscribe(
      response => {
        this.eventos = response.EventoEncontrado;
        console.log(response)
      }, error => {
        console.log(<any>error)
      }
    )
  }

  AgregarEvento(){
    this._EventosServices.RegistrarUnNuevoEvento(this.IdEventoModel).subscribe(
      response => {
        this.eventosnull = response.EventoGuardado;
        this.VerHabitacionesPorElHotel();
        this.VerTodosLosEventros();
      }, error => {
        console.log(<any>error)
      }
    )
  }

  AgregarHabitacion(){
    this._HabitacionesServices.AgregarUnaNuevaHabitacion(this.IdHabitacionModel).subscribe(
      response => {
        this.habitacion = response.HabitacionGuardada;
        console.log(response)
        this.VerHabitacionesPorElHotel();
        this.VerTodosLosEventros();
      }, error => {
        console.log(<any>error)
      }
    )
  }

  EliminarHotel(){
    this._HotelesService.EliminarHotel().subscribe(
      response => {
        console.log(response)
      }, error => {
        console.log(<any>error)
      }
    )
  }

  EditarHotel(){
    this._HotelesService.EditarHotel(this.IdHotelModel).subscribe(
      response => {
        console.log(response.hotelactualizado)
        this.VerHotel();
        this.VerHabitacionesPorElHotel();
        this.VerTodosLosEventros();
      }, error => {
        console.log(<any>error)
      }
    )
  }

  VerSoloUnEvento(id: any){
    this._EventosServices.VerSoloUnEvento(id).subscribe(
      response => {
        this.token = response.EventoEncontrado._id;
        localStorage.setItem('evento',this.token)
      }, error => {
        console.log(<any>error)
      }
    )
    }

    VerSoloUnaHabitacion(id: any){
      this._HabitacionesServices.VerHabitacionPorId(id).subscribe(
        response => {
          this.token = response.HabitacionEncontrada._id;
          localStorage.setItem('habitacion',this.token)
        }, error => {
          console.log(<any>error)
        }
      )
    }
}
