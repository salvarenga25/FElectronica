import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public user = {
    usuario: '',
    contras:'',
    nombre:'',
    apellido:'',
    email:'',
    celular:''
  }
  constructor(private usuarioService:UsuarioService){

  }
  ngOnInit(): void { 
  }
  formSubmit(){
    console.log(this.user);
    //checks if the username is null or empty
    if(this.user.usuario == '' || this.user.usuario == null){ 
      alert('El nombre de usuario es Requerido')
      return;
    }
    this.usuarioService.añadirUsuario(this.user).subscribe(
      (data) => {
        console.log(data);
        alert('Usuario guardado con exito')
      },(error) =>{
        console.log(error);
        alert('Ha ocurrido un error en el sistema')
      }
    )
  }
}
