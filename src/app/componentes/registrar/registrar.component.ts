import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/modelos/usuariomodelo';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.scss'],
  providers: [UsuarioService]
})
export class RegistrarComponent implements OnInit {
  public idUsuarioModel: Usuario;
  public usernull: any;

  constructor( private _UsuarioService: UsuarioService, private _router: Router ) { 
    this.idUsuarioModel = new Usuario("","","","","","","");
  }

  ngOnInit(): void {
  }

  AgregarUsuario(){
    this._UsuarioService.RegistrarUsuarios(this.idUsuarioModel).subscribe(
      response => {
        this.usernull = response.usuarioGuardado;
        this._router.navigate(['/login'])
      }, error => {
        console.log(<any>error)
      }
    )
  }

}
