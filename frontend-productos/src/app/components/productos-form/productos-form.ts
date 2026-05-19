import { Component, EventEmitter, Output } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-productos-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './productos-form.html',
  styleUrl: './productos-form.css'
})
export class ProductosForm {

  @Output() productoGuardado = new EventEmitter<void>();

  form!: FormGroup;

  constructor(private fb: FormBuilder, private productosService: ProductosService) {
    const formattedDate = new Date().toISOString().slice(0, 16);

    this.form = this.fb.group({
      nombre: ['', Validators.required],
      precio: [0, [Validators.required, Validators.min(0.01)]],
      fechaCreacion: [formattedDate, Validators.required]
    });
  }

  guardar() {
    if (this.form.invalid) return;

    // Fecha exacta del momento en que se guarda
    const producto = {
      nombre: this.form.value.nombre,
      precio: this.form.value.precio,
      fechaCreacion: new Date().toISOString()
    };

    this.productosService.crearProducto(producto).subscribe(() => {
      alert("Producto registrado correctamente");

      // Emitir evento para refrescar la lista
      this.productoGuardado.emit();

      // Reset con fecha actual nuevamente
      this.form.reset({
        nombre: '',
        precio: 0,
        fechaCreacion: new Date().toISOString().slice(0, 16)
      });
    });
  }
}