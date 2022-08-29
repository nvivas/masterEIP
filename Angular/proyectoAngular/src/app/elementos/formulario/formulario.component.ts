import { Component, OnInit } from '@angular/core';

import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  nombre: string = '';
  apellidos: string = '';
  email: string = '';
  password: string = '';
  telefono: string = '';
  asunto: string = '';
  consulta: string = '';
  muestraHijo: boolean = true;

  // creación de variable.
  formAcceso: FormGroup = this.form.group({
    email: [
      '',
      [
        Validators.required,
        Validators.pattern(
          /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
        ),
      ],
    ],
    password: [
      '',
      [
        Validators.minLength(8),
        Validators.pattern(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/
        ),
      ],
    ],

    telefono: [
      '',
      [
        Validators.minLength(9),
        Validators.pattern(/\+34\s6[0-9]{1,2}\s[0-9]{7}/),
      ],
    ],
  });

  constructor(private form: FormBuilder) {}

  ngOnInit(): void {}

  validarDatos(info: string): boolean {
    if (
      this.formAcceso.get(info)?.invalid &&
      (this.formAcceso.get(info)?.touched || this.formAcceso.get(info)?.dirty)
    ) {
      return true;
    } else {
      return false;
    }
  }

  dimeMensaje(dato: string): string {
    let mensaje: string = '';

    if (this.formAcceso.get(dato)?.hasError('required')) {
      mensaje = '* Campo obligatorio';
    } else if (
      this.formAcceso.get(dato)?.hasError('pattern') &&
      dato == 'email'
    ) {
      mensaje = '* Correo incorrecto';
    } else if (this.formAcceso.get(dato)?.hasError('minlength')) {
      mensaje = 'mínimo 8 caracteres';
    } else if (this.formAcceso.get(dato)?.hasError('pattern')) {
      mensaje =
        '* Debe tener al menos una mayúscula, una minuscula, un número y un símbolo y entre 8 y 15 caracteres';
    }
    return mensaje;
  }

  mostrarMensaje(dato: string): boolean {
    return this.dimeMensaje(dato) == '' ? true : false;
  }
}
