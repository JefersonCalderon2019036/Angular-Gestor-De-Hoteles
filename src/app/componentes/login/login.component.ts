import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/modelos/usuariomodelo';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [UsuarioService]
})
export class LoginComponent implements OnInit {
  public usuarioModel: Usuario;
  public token: any;
  public identidad: any;
  public rol: any;

  constructor(
    private _usuarioService: UsuarioService,
    private _router: Router
  ) {
    this.usuarioModel = new Usuario('', '', '', '', '', '', '');
  }

  ngOnInit(): void {
  }

  getToken() {
    this._usuarioService.login(this.usuarioModel).subscribe(
      (response) => {
        this.token = response.token;
        this.identidad = response.usuarioEncontrado._id;
        localStorage.setItem('token', this.token);
        localStorage.setItem('Identidad', this.identidad);
        localStorage.setItem('rol', this.rol);
        this._router.navigate(['/principal'])
      },
      (error) => {
        console.log(<any>error);
      }
    );
  }
}
