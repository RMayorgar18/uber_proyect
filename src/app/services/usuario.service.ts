import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { last, lastValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient) { }

  async agregarUsuario(datosUsuario:dataBodyUsuario, imgFileUser:any){
    try {
      const formData = new FormData();

      formData.append('p_nombre', datosUsuario.p_nombre);
      formData.append('p_correo_electronico',datosUsuario.p_correo_electronico);
      formData.append('p_telefono', datosUsuario.p_telefono);
      if (datosUsuario.token) {
        formData.append('token',datosUsuario.token);
      }
  
      formData.append('image_usuario', imgFileUser.file, imgFileUser.name);
  
      const response = await lastValueFrom(this.http.post<any>(environment.apiUrl + 'user/agregar',formData));
      return response;
      
    } catch (error) {
      throw error;
    }

  }
asyc obtenerusuario(data:dataGetUser){
  try{
    const response = await lastValueFrom(this.http.get(environment.apiUrl + 'user/agregar'))
  }
}


}

interface dataBodyUsuario{
  p_nombre:string;
  p_correo_electronico:string;
  p_telefono:string;
  token?:string;
}

interface dataGetUser

}