import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viaje',
  templateUrl: './viaje.page.html',
  styleUrls: ['./viaje.page.scss'],
})
export class ViajePage implements OnInit {
  viajes: any[] = [
    { 
      destino: 'Nueva York', 
      aeropuerto: 'JFK', 
      aerolinea: 'Delta', 
      fechaSalida: '2024-09-20', 
      horaSalida: '10:30', 
      showDetails: false 
    },
    { 
      destino: 'Londres', 
      aeropuerto: 'Heathrow', 
      aerolinea: 'British Airways', 
      fechaSalida: '2024-10-15', 
      horaSalida: '18:00', 
      showDetails: false 
    }
  ];

  constructor(private activateroute: ActivatedRoute) {}

  ngOnInit() {}

  toggleDetails(viaje: any) {
    viaje.showDetails = !viaje.showDetails;
  }

  agregarViaje() {
    const nuevoViaje = {
      destino: 'París',
      aeropuerto: 'Charles de Gaulle',
      aerolinea: 'Air France',
      fechaSalida: '2024-11-01',
      horaSalida: '14:00',
      showDetails: false
    };
    this.viajes.push(nuevoViaje);
  }
}