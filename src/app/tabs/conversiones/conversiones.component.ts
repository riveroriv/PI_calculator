import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-conversiones',
  templateUrl: './conversiones.component.html',
  styleUrls: ['./conversiones.component.css']
})
export class ConversionesComponent implements OnInit {
  decimal!: string;
  binario!: string;
  hexadecimal!: string;
  octal!: string;
  constructor() { }

  ngOnInit(): void {
  }

  decControl = new FormControl('', [Validators.pattern('[0-9]*')]);
  octControl = new FormControl('', [Validators.pattern('[0-7]*')]);
  binControl = new FormControl('', [Validators.pattern('[0-1]*')]);
  hexControl = new FormControl('', [Validators.pattern('[0-9A-Fa-f]*')]);
  matcher = new MyErrorStateMatcher();

  valor(input: number, value: string){
    if(value != ""){
      switch (input) {
        case 0:
          if(this.decControl.status == 'VALID'){
            let dec_0 = parseInt(value);
            this.binario = dec_0.toString(2);
            this.hexadecimal = dec_0.toString(16);
            this.octal = dec_0.toString(8);
            
            this.binControl.patchValue(this.binario);
            this.hexControl.patchValue(this.hexadecimal);
            this.octControl.patchValue(this.octal);
          }
          break;
        case 1:
          if(this.binControl.status == 'VALID'){  
            let dec_1 = parseInt(value, 2);
            this.decimal = dec_1.toString();
            this.hexadecimal = dec_1.toString(16);
            this.octal = dec_1.toString(8);

            this.decControl.patchValue(this.decimal);
            this.hexControl.patchValue(this.hexadecimal);
            this.octControl.patchValue(this.octal);
          }
          break;
        case 2:
          if(this.hexControl.status == 'VALID'){
            let dec_2 = parseInt(value, 16);
            this.decimal = dec_2.toString();
            this.binario = dec_2.toString(2);
            this.octal = dec_2.toString(8);
            
            this.decControl.patchValue(this.decimal);
            this.binControl.patchValue(this.binario);
            this.octControl.patchValue(this.octal);
          }
          break;
        case 3:
          if(this.octControl.status == 'VALID'){
            let dec_3 = parseInt(value, 8);
            this.decimal = dec_3.toString();
            this.binario = dec_3.toString(2);
            this.hexadecimal = dec_3.toString(16);
            
            this.decControl.patchValue(this.decimal);
            this.binControl.patchValue(this.binario);
            this.hexControl.patchValue(this.hexadecimal);
          }
          break;
        default:
          break;
      }
    }else{
      this.decimal = "";
      this.binario = "";
      this.hexadecimal = "";
      this.octal = "";
    }
  }
}
