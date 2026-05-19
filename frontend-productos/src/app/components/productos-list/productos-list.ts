import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Producto } from '../../models/producto';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-productos-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productos-list.html',
  styleUrl: './productos-list.css'
})
export class ProductosList implements OnInit {

  productos: Producto[] = [];

  constructor(private productosService: ProductosService) {}

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos() {
    this.productosService.getProductos().subscribe(data => {
      this.productos = data;
    });
  }

  refrescar() {
    this.cargarProductos();
  }
}