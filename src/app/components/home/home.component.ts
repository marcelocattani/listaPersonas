import { ThrowStmt } from '@angular/compiler';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Persona } from '../../Datos/Fuente';
import { IPersona } from '../../Interface/Persona';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  public info: Persona = new Persona;

  constructor() {

  }

  ngOnInit(): void {
  }

}
