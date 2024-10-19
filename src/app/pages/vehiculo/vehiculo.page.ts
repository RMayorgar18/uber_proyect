import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.page.html',
  styleUrls: ['./vehiculo.page.scss'],
})
export class VehiculoPage implements OnInit {
  vehiculos: any[] = [];

  constructor(private router: Router) { }

  ngOnInit() {
    this.cargarVehiculos();
  }

  cargarVehiculos() {
    const vehiculos = JSON.parse(localStorage.getItem('vehiculos') || '[]');
    this.vehiculos = vehiculos;
  }

  agregarVehiculo() {
    this.router.navigateByUrl('/listar-vehiculo');
  }

  toggleDetails(vehiculo: any) {
    vehiculo.showDetails = !vehiculo.showDetails;
  }
}
