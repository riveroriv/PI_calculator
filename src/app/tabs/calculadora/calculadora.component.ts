import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { MyErrorStateMatcher } from '../conversiones/conversiones.component';


@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
  ip: number[] = [192, 168, 10, 0];
  mk: number[] = [255, 255, 255, 0];
  rd: number[] = [0, 0, 0, 0];
  ht: number[] = [0, 0, 0, 0];
  bt: number[] = [0, 0, 0, 0];

  ipb: number[][] = [[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]];
  mkb: number[][] = [[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]];
  rdb: number[][] = [[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]];
  htb: number[][] = [[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]];
  btb: number[][] = [[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]];

  maskBase: number = 24;

  seg1Control = new FormControl('', [Validators.pattern('[0-9]*')]);
  seg2Control = new FormControl('', [Validators.pattern('[0-9]*')]);
  seg3Control = new FormControl('', [Validators.pattern('[0-9]*')]);
  seg4Control = new FormControl('', [Validators.pattern('[0-9]*')]);
  maskControl = new FormControl('', [Validators.pattern('[0-9]*')]);
  matcher = new MyErrorStateMatcher();

  constructor() { }

  ngOnInit(): void {
    
  }

}
