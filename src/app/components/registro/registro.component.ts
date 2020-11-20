import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario: string;
  password: string;

  constructor() { }

  // tslint:disable-next-line: typedef
  register() {
    console.log(this.usuario);
    console.log(this.password);
  }

  ngOnInit(): void {
  }

}
