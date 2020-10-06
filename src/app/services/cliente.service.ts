
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

// Model
import { Cliente } from '../models/cliente';
@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  // Traer los datos de firebase
  clienteList: AngularFireList<any>;

  // Una variable temporal, para guardar los datos seleccionados, del tipo Product
  selectedCliente: Cliente = new Cliente();

  constructor(private firebase: AngularFireDatabase) { }

  // Traer todos los productos desde firebase 
  getClientes() { // guarda los elementos en la varible 'cliente'
    return this.clienteList = this.firebase.list('cliente');
  }

  // crear un nuevo registro  , recibiendo un parametro de tipo Cliente
  insertCliente(cliente: Cliente) {
    // agregar un dato al final de la lista, como recibe un objeto del tipo Product , puede acceder a sus propiedades
    this.clienteList.push({
      nombre: cliente.nombre,
      dui: cliente.dui,
      mascota: cliente.mascota,
      tratamiento: cliente.tratamiento,
      medicamento: cliente.medicamento,
      costo: cliente.costo
    });
  }

  // Actualiza un producto, recibiendo un parametro de tipo Product
  updateCliente(cliente: Cliente) {
    // Utilizando el metodo update de firebase , se envia clave y los parametros que va actualizar 
    this.clienteList.update(cliente.$key, {
      nombre: cliente.nombre,
      dui: cliente.dui,
      mascota: cliente.mascota,
      tratamiento: cliente.tratamiento,
      medicamento: cliente.medicamento,
      costo: cliente.costo
    });
  }

  // Elimina un producto, recibiendo como parametro la clave , utilizando el metodo remove de firebase
  deleteCliente($key: string) {
    this.clienteList.remove($key);
  }

}
