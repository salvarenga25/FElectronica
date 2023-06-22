import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginData={
  "username" : '',
  "password" : ''
  }
  constructor(private snack:MatSnackBar , private loginService:LoginService){ }

  ngOnInit(): void{

  }

  formSubmit(){
    if(this.loginData.username.trim() == '' || this.loginData.username.trim() == null){
      this.snack.open('El nombre de usuario es requerido !!', 'Aceptar',{
        duration:3000,
        verticalPosition:'top',
        horizontalPosition:'right'
      })
      return;
    }
    if(this.loginData.password.trim() == '' || this.loginData.password.trim() == null){
      this.snack.open('La contraseña es requerida !!', 'Aceptar',{
        duration:3000,
        verticalPosition:'top',
        horizontalPosition:'right'
      })
      return;
    }

    this.loginService.generateToken(this.loginData).subscribe(
      (dato:any) =>{
        console.log(dato);
        this.loginService.loginUser(dato.token);
        this.loginService
      },(error) =>{
        console.log(error);
        this.snack.open('Datos Erroneos, Intente otra vez', 'Aceptar',{
          duration:3000
        });
      } 
    )
  }
}
