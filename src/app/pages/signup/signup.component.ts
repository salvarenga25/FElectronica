import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';
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
  constructor(private usuarioService:UsuarioService, private snack: MatSnackBar){

  }
  ngOnInit(): void { 
  }
  formSubmit(){
    console.log(this.user);
    //checks if the username is null or empty
    if(this.user.usuario == '' || this.user.usuario == null){ 
      this.snack.open('El nombre de usuario es Requerido !!','Aceptar',{
        duration : 3000,
        verticalPosition : 'top',
        horizontalPosition : 'right'
      });
      return;
    }
    this.usuarioService.añadirUsuario(this.user).subscribe((data) => {
      console.log(data);
      Swal.fire("Usuario Guardado! Success!");
    },(error)=>{
      console.log(error);
      this.snack.open('Ha ocurrido un error en el sistema', 'Aceptar',{
        duration : 3000
      });
    }
    )
  }
}
