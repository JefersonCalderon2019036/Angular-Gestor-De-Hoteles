import { Component, OnInit } from '@angular/core';
import { Eventos } from 'src/app/modelos/eventos.model';
import { EventosService } from 'src/app/servicios/eventos.service';
import { HotelesService } from 'src/app/servicios/hoteles.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.scss'],
  providers: [EventosService]
})
export class DetallesComponent implements OnInit {
  public eventosnull: any;
  public hotel: any;
  public hotelesnull: any;
  public IdEventoModel: Eventos;

  constructor(private _EventoService: EventosService, private _HotelesService: HotelesService) { 
    this.IdEventoModel = new Eventos( "","","","",0,"","",0,[{textoComentario: "", calificacionhabitacion: 0, calificacionservicio: 0,idUsuarioComentario: ""}],0,0,0,0);
  }

  ngOnInit(): void {
    this.VerEventos()
  }

  VerEventos(){
    this._EventoService.VerSoloUnEventop().subscribe(
      Response => {
        this.eventosnull = Response.EventoEncontrado;
      }, error => {
        console.log(<any>error)
      }
    )
  }

  EliminarEvento(){
    this._EventoService.EliminarEventos().subscribe(
      response => {
        console.log(response)
      }, error => {
        console.log(<any>error)
      }
    )
  }

  EditarEvento(){
    this._EventoService.EditarEvento(this.IdEventoModel).subscribe(
      response => {
        console.log(response)
        this.VerEventos();
      }, error => {
        console.log(<any>error)
      }
    )
  }
}
