import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  nombreCompleto: string = '';
  correoElectronico: string = '';
  numeroTelefono: string = '';

  constructor(private router: Router) { }

  ngOnInit() {
    this.cargarDatos();
  }

  cargarDatos() {
    const usuario = JSON.parse(localStorage.getItem('usuario') || '{}');
    this.nombreCompleto = usuario.nombre || '';
    this.correoElectronico = usuario.mail || '';
    this.numeroTelefono = usuario.numeroTelefono || '';
  }

  editarPerfil() {
    this.router.navigateByUrl('/mod-perfil');333
  }
}
