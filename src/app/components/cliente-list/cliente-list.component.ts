import { Component, OnInit } from '@angular/core';
// model
import { Cliente } from '../../models/cliente';

// service
import { ClienteService } from '../../services/cliente.service';

// toastr
import { ToastrService } from 'ngx-toastr';

//PDF
import {html2pdf} from 'html2pdf.js';
import {jsPDF} from 'jspdf';


@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit {

  constructor(
    private clienteService: ClienteService,
    private toastr: ToastrService
  ) { }

  //Filtros pipes
  filterCliente = '';

  
  // Arreglo para almacenar la informacion que se obtenga de la base de datos de firebase
  clienteList: Cliente[];
  ngOnInit() {
    return this.clienteService.getClientes()
      .snapshotChanges().subscribe(item => {
        this.clienteList = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x["$key"] = element.key;
          this.clienteList.push(x as Cliente);
        });
      });
  }

  
  onEdit(cliente: Cliente) {
    this.clienteService.selectedCliente = Object.assign({}, cliente);
  }
  
  onDelete($key: string) {
    if (confirm('¿Seguro de Eliminar este Registro?')) {
      this.clienteService.deleteCliente($key);
      this.toastr.warning('Eliminacion Exitosa', 'Cliente Eliminado');
    }
  }
}
