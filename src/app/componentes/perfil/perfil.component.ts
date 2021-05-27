import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {
  public idUsuarioModel: any;
  public usernull: any;

  constructor(private _usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.miperfil();
  }


  miperfil(){
    this._usuarioService.ObtenerMiPerfil().subscribe(
      response =>{
        this.idUsuarioModel = response.usuarioEncontrado;
      }, error => {
        console.log(<any>error)
      }
    )
  }

  //funcion para editar el perfil de un usuarios
  EditarTuPerfil(){
    this._usuarioService.EditarTuPerfil(this.idUsuarioModel).subscribe(
      response => {
        this.usernull = response.usuarioActualizado;
        this.miperfil();
      }, error => {
        console.log(<any>error)
      }
    )
  }

  EliminarMiPerfil(){
    this._usuarioService.EliminarTuPerfil().subscribe(
      response => {
        console.log(response)
        this.miperfil();
      }, error => {
        console.log(<any>error)
      }
    )
  }
}
