import { Component, OnInit } from '@angular/core';
/*import { UsuariosService } from "../../Services/usuarios/usuarios.service";*/



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  /*usuario: string;
  password: string;*/

  constructor(){}
  /*constructor(public userService: UsuariosService) { }*/

  // tslint:disable-next-line: typedef
  /*login() {
    const user = {email: this.usuario, password: this.password};
    this.userService.login(user).subscribe( data => {
      console.log(data);
    });
  }*/

  ngOnInit(): void {
  }

}
