import { Component, OnInit } from '@angular/core';
import { Event } from '@angular/router';
import { Gasto } from '../gasto/gasto.model';
import { GastoServicio } from '../gasto/gasto.servicio';
import { Ingreso } from '../ingreso/ingreso.model';
import { IngresoServicio } from '../ingreso/ingreso.servicio';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  tipo:string="ingresoOperacion";
  descripcionInput:string;
  valorInput:number;


  constructor(private ingresoServicio:IngresoServicio, private gastoServicio:GastoServicio) { }

  ngOnInit(): void {
  }

  tipoOperacion(evento){
    this.tipo = evento.target.value
  }

  agregarValor(){
    if(this.tipo === "ingresoOperacion")
      this.ingresoServicio.ingresos.push(new Ingreso(this.descripcionInput, this.valorInput));
    else
      this.gastoServicio.gastos.push(new Gasto(this.descripcionInput, this.valorInput));
  }

}
