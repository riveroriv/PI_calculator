import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTable, MatTableDataSource} from '@angular/material/table';

export interface Net {
  mask        : number,
  netDir      : number[],
  netBroadcast: number[],
  ips         : number,
}

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})
export class GraficoComponent implements OnInit {
  nets: Net[] = [];
  ipBase: number[] = [0,0,0,0];
  maskBase = 0;
  resaltado: number = -1;

  dataSource: MatTableDataSource<Net> = new MatTableDataSource();
  displayedColumns = ["pos", "mask", "small", "netDir", "netBroadcast", "ips"];

  @ViewChild(MatTable) table!: MatTable<Net>;

  constructor() { }

  ngOnInit(): void {
    this.aplicar('192', '168', '10', '0', '24');
  }

  bifurcar(posicion: number, net: Net){
    if(net.mask-this.maskBase < 5 && net.mask < 30){
      let mask = net.mask +1;
      let subNet1: Net = {
        mask: mask,
        netDir: net.netDir,
        netBroadcast: this.bro(net.netDir, mask),
        ips: net.ips/2
      };
      let subNet2: Net= {
        mask: mask,
        netDir: this.dir(net.netBroadcast, mask),
        netBroadcast: net.netBroadcast,
        ips: net.ips/2
      };
      this.nets.splice(posicion, 1, subNet1, subNet2);
      this.dataSource.data = this.nets.slice();
    }
  }
  reiniciar(){
    this.nets = [{
      mask        : this.maskBase,
      netDir      : this.dir(this.ipBase,this.maskBase),
      netBroadcast: this.bro(this.ipBase,this.maskBase),
      ips         : Math.pow(2, 32 - this.maskBase) 
    }];
    this.dataSource.data = this.nets.slice();
  }
  aplicar(s1:string, s2:string, s3:string, s4:string, mk:string){
    let seg1 = parseInt(s1);
    let seg2 = parseInt(s2);
    let seg3 = parseInt(s3);
    let seg4 = parseInt(s4);
    let mask = parseInt(mk);

    //if

    this.ipBase = [seg1, seg2, seg3, seg4];
    this.maskBase = mask;

    this.reiniciar();
  }

  dir(ip: number[], mask: number){
    let dir = ip.slice();
    dir[3] = this.and(dir[3], mask>24 ? mask%24 : 0);
    dir[2] = this.and(dir[2], mask>16 ? (mask<24? mask%16 : 8) : 0);
    dir[1] = this.and(dir[1], mask>8 ? (mask<16? mask%8 : 8 ) : 0);
    return dir;
  }
  and(num: number, bits: number): number{
    let value = 255, exp = 8;
    for (let i = 0; i < 8 - bits; i++) {
      value -= Math.pow(2, i);
    }
    return num & value;
  }
  bro(ip: number[], mask: number){
    let dir = ip.slice();
    dir[3] = this.or(dir[3], mask>24 ? mask%24 : 0);
    dir[2] = this.or(dir[2], mask>16 ? (mask<24? mask%16 : 8) : 0);
    dir[1] = this.or(dir[1], mask>8 ? (mask<16? mask%8 : 8 ) : 0);
    return dir;
  }
  or(num: number, bits: number): number{
    let value = 0, exp = 8;
    for (let i = 0; i < 8 - bits; i++) {
      value += Math.pow(2, i);
    }
    return num | value;
  }
  resaltar(pos: number){
    if(pos == this.resaltado){
      this.resaltado = -1;
    } else{
      this.resaltado = pos;
    }
  }
}
