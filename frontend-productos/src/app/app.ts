import { Component, ViewChild } from '@angular/core';
import { ProductosForm } from './components/productos-form/productos-form';
import { ProductosList } from './components/productos-list/productos-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductosForm, ProductosList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  @ViewChild(ProductosList) productosListComponent!: ProductosList;

  onProductoGuardado() {
    this.productosListComponent.refrescar();
  }
}