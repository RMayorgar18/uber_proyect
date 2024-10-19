//

import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms'
import { Router } from '@angular/router';
import { Camera, CameraResultType } from '@capacitor/camera';
import { AlertController } from '@ionic/angular';
import { UsuarioService } from 'src/app/services/usuario.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formularioRegistro: FormGroup;
  imagen:any;

  constructor(public fb: FormBuilder,public alertController: AlertController, private Router: Router, private userService: UsuarioService) { 
    this.formularioRegistro = this.fb.group({
      'nombre': new FormControl("",Validators.required),
      'mail': new FormControl("",Validators.required),
      'celular': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required),
      'confirmarPassword': new FormControl("",Validators.required)
    });

  }

  ngOnInit() {
  }

  async registro(){
    const userFirebase = await this.firebase.registro(this,correo,this.contraseña);
  } 

  async takePhoto(){
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri 
    });
    if(image.webPath){
      const response = await fetch(image.webPath);
      const blob = await response.blob();

      this.imagen = {
        fname: 'foto' + image.format,
        src:image.webPath,
        File:blob
      }
    }
    var imageUrl = image.webPath;
    this.imagen.src = imageUrl;
  }

  async guardar() {
    var f = this.formularioRegistro.value;
  
    if (this.formularioRegistro.invalid) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Por favor, rellena todos los campos.',
        buttons: ['OK'],
      });
  
      await alert.present();
      return;
    }
  
  
    const password = f.password ? f.password.trim() : '';
    const confirmarPassword = f.confirmarPassword ? f.confirmarPassword.trim() : '';
  
    if (password !== confirmarPassword) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Las contraseñas no coinciden.',
        buttons: ['OK'],
      });
  
      await alert.present();
      return;
    }
  
    // Guarda el usuario en el localStorage
    var usuario = {
      nombre: f.nombre,
      mail: f.mail,
      celular: f.celular,
      password: f.password
    };
    localStorage.setItem('usuario', JSON.stringify(usuario));
  
    const alert = await this.alertController.create({
      header: 'Éxito',
      message: 'Registro completado.',
      buttons: ['OK'],
    });
  
    await alert.present();
  
    this.Router.navigateByUrl('/login');
  }
  

}
