import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
   const resultadoClientes =[];

   for(const cliente of value ){
     if(cliente.nombre.toLowerCase().indexOf(arg.toLowerCase()) > -1 || cliente.mascota.toLowerCase().indexOf(arg.toLowerCase()) > -1 || cliente.dui.toString().indexOf(arg.toString()) > -1 ){
       resultadoClientes.push(cliente);
     };
   };
   return resultadoClientes;
   
  }

}
