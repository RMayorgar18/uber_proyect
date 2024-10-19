import { AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  
  correo:string = "";


  constructor(private activateRoute:ActivatedRoute,
              private Router:Router,
              public alertController: AlertController
  )
  
  { }

  ngOnInit() {
    this.correo = this.activateRoute.snapshot.params["mail"];
    console.log("PARAMETRO URL MAIL---------> ", this.correo);
  }

  viaje(){
    let destino = "burkina faso";
    this.Router.navigateByUrl('viaje/' + destino);
  }

  vehiculo(){
    let marca = "toyota";
    this.Router.navigateByUrl('vehiculo/' + marca);

  }

  async cerrar(){
    const alert = await this.alertController.create({
      header: 'AVISO',
      
      message: 'Sesion cerrada.',
      buttons: ['OK'],
    });

    await alert.present();

    this.Router.navigateByUrl('login');

  }

}


