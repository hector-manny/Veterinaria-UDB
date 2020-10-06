import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-veterinaria',
  templateUrl: './veterinaria.component.html',
  styleUrls: ['./veterinaria.component.css']
})
export class VeterinariaComponent implements OnInit {

  registro=[];
  clientes:any;
  nombre:string;
  dui:number;
  mascota:string;
  tratamiento:string;
  medicamento:string;
  costo:number;
  contador:number;
  duis=[]
  c:number;
  descuento:number;
   constructor() { }
   ngOnInit() {
   
   this.nombre='';
   this.dui=null;
   this.mascota='';
   this.tratamiento='';
   this.medicamento='';
   this.costo=null;
   this.contador=0;
   this.c=1;
   this.descuento=0;

   }
   registrar(){
   if(this.costo>0 ){

    for (let i = 0; i < this.duis.length; i++) {
      if (this.dui==this.duis[i]) {
        this.c++;
      } 
    }

    
   
    console.log(this.c);
    if (this.c>=2 && this.c<=4) {
      this.descuento=this.costo*0.95
      this.clientes={"nombre":this.nombre,"dui":this.dui,"mascota":this.mascota,"tratamiento":this.tratamiento, "medicamento":this.medicamento,"costo":this.descuento};
      this.registro.push(this.clientes);
      this.duis.push(this.dui);
      this.contador++;
    } else if(this.c>4) {
      this.descuento=this.costo*0.90
      this.clientes={"nombre":this.nombre,"dui":this.dui,"mascota":this.mascota,"tratamiento":this.tratamiento, "medicamento":this.medicamento,"costo":this.descuento};
      this.registro.push(this.clientes);
      this.duis.push(this.dui);
      this.contador++;
    }
    else{
      this.clientes={"nombre":this.nombre,"dui":this.dui,"mascota":this.mascota,"tratamiento":this.tratamiento, "medicamento":this.medicamento,"costo":this.costo};
      this.registro.push(this.clientes);
      this.duis.push(this.dui);
      this.contador++;
    }
    this.c=1;

   }else{

  }

  }
}
