import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baseUrl from './helper';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient:HttpClient) { }
  
  //generamos el token
  public generateToken(loginData:any){
    return this.httpClient.post(`${baseUrl}/generate-token`,loginData);
  }

}
