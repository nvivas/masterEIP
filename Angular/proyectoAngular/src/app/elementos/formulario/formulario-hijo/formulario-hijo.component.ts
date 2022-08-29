import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-formulario-hijo',
  templateUrl: './formulario-hijo.component.html',
  styleUrls: ['./formulario-hijo.component.css'],
})
export class FormularioHijoComponent implements OnInit {
  @Input('datosPadre') nombre: string = '';

  constructor() {}

  ngOnInit(): void {}
}
