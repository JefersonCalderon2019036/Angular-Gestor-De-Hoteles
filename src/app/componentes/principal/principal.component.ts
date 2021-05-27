import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Eventos } from 'src/app/modelos/eventos.model';
import { Habitacion } from 'src/app/modelos/habitacionesmodelo';
import { Hoteles } from 'src/app/modelos/hotelesmodelo';
import { Usuario } from 'src/app/modelos/usuariomodelo';
import { EventosService } from 'src/app/servicios/eventos.service';
import { HabitacionesService } from 'src/app/servicios/habitaciones.service';
import { HotelesService } from 'src/app/servicios/hoteles.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss'],
  providers: [HabitacionesService, UsuarioService, HotelesService, HabitacionesService]
})
export class PrincipalComponent implements OnInit {

  public usuarios: any;
  public hoteles: any;
  public token: any;
  public identidad: any;
  public idUsuarioModel: Usuario;
  public idhotelesModel: Hoteles;
  public habitaciones: any;
  public eventos: any;
  
  constructor(private _UsuarioService: UsuarioService,
    private _HotelesService:  HotelesService,
    private _HabitacionService: HabitacionesService,
    private _EventosServices: EventosService) {
    this.idUsuarioModel = new Usuario("","","","","","","");
    this.idhotelesModel = new Hoteles("","","","","","","","");
    this.token = this._UsuarioService.getToken();
    this.identidad = this._UsuarioService.getUsuario();
   }

  ngOnInit(): void {
    this.VerTodosLosHoteles();
    this.VerTadasLasHabitaciones();
    this.VerTodosLosEventos();
  }

  //metodo para crear un una nueva habitacion
  AgregarUnNuevoHotel(){
    this._HotelesService.AgregarUnNuevoHotel(this.idhotelesModel,this.token,this.identidad).subscribe(
      response => {
        this.hoteles = response.hotelguardado;
        this.VerTodosLosHoteles();
      }, error => {
        console.log(<any>error)
      }
    )
  }

  //metod para traer todos los hoteles
  VerTodosLosHoteles(){
    this._HotelesService.VerTodosLosHoteles(this.token).subscribe(
      response => {
        this.hoteles = response.hotelencontrado;
      }, error => {
        console.log(<any>error)
      }
    )
  }

  //metodo para traer todas las habitaciones
  VerTadasLasHabitaciones(){
    this._HabitacionService.VerTodasLasHabitaciones(this.token).subscribe(
      response => {
        this.habitaciones = response.hotelencontrado;
        console.log(response)
      }, error => {
        console.log(<any>error);
      }
    )
  }

  //funcion para ver todos los eventos
  VerTodosLosEventos(){
    this._EventosServices.VerTodosLosEventos(this.token).subscribe(
      response => {
        this.eventos = response.eventosencontrados;
      },error => {
        console.log(<any>error)
      }
    )
  }

  //almacenamos el id del hotel seleccionado en el local storage
  VerSoloUnHotel(id: any){
    this._HotelesService.VerSoloUnHotel(this.token,id).subscribe(
      reponse => {
        this.token = reponse.hotelencontrado._id;
        localStorage.setItem('hotel',this.token)
      }, error => {
        console.log(<any>error)
      }
    )
  }
}
