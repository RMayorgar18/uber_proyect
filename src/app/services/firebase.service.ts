import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private fire:AngularFireAuth) { }

  async login(email:string, contrasena:string){
    //const request = await this.fire.signInWithEmailAndPassword(email,contrasena);
    //return request;
    try {
      return await this.fire.signInWithEmailAndPassword(email,contrasena); 
    } catch (error: any) {
      throw error;
    }
  }

  async Registro(email:string, contrasena:string){
    const request = await this.fire.createUserWithEmailAndPassword(email,contrasena);
  }
}

