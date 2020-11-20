import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SistemasExternosService } from '../../Services/sistemas_externos/sistemas-externos.service';

@Component({
  selector: 'app-sistemas-externos',
  templateUrl: './sistemas-externos.component.html',
  styleUrls: ['./sistemas-externos.component.css']
})
export class SistemasExternosComponent implements OnInit {

  sistemaExternoForm: FormGroup;
  sistemasExternos: any;

  constructor(
    public fb: FormBuilder,
    public sistemasExternosService: SistemasExternosService
    ) {

  }

  ngOnInit(): void {
this.sistemaExternoForm = this.fb.group({
nit : ['', Validators.required],
nombre : ['', Validators.required],
telefono : ['', Validators.required],
direccion : ['', Validators.required],
tipoSistema : ['', Validators.required],
// tslint:disable-next-line: semicolon
})
  }



  guardar(): void {
    this.sistemasExternosService.crearSistemaExterno(this.sistemaExternoForm.value).subscribe( resp => {
      this.sistemaExternoForm.reset();
      console.log('Entra al metodo');
    },
      error => { console.error(error); }
    );
  }

}
