import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserModel } from 'src/app/models/usuario';
import { StorageService } from 'src/app/services/storage.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  correo: string = "";
  contrasena: string = "";
  token: string = "";
  usuario: UserModel[] = []; 

  constructor(
    private router: Router,
    private storage: StorageService,
    private usuarioService: UsuarioService,
    private activateRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.cargarUsuario();
    this.correo = this.activateRoute.snapshot.params["correo"];
    console.log("PARAMETRO URL ---> ", this.correo);
  }

  async cargarUsuario() {
    let dataStorage = await this.storage.obtenerStorage();

    if (dataStorage && dataStorage.length > 0) {
      const req = await this.usuarioService.obtenerUsuario({
        p_correo: dataStorage[0].usuario_correo,
        token: dataStorage[0].token
      });

      if (req && req.data) {
        this.usuario = req.data;
        console.log("DATA INICIO USUARIO", this.usuario);
      } else {
        console.error("No se encontraron datos de usuario en la respuesta.");
      }
    } else {
      console.error("No se encontró información en el almacenamiento.");
    }
  }

  editarPerfil() {
    this.router.navigateByUrl('/mod-perfil');
  }
}
