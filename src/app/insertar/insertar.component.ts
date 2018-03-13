import { Component, OnInit } from '@angular/core';

import { RutasService } from '../../../servicio/rutas.service'

import { NgForm } from '@angular/forms'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-insertar',
  templateUrl: './insertar.component.html',
  styleUrls: ['./insertar.component.css'],
  providers :[RutasService]
})
export class InsertarComponent implements OnInit {

  constructor(private rutasService : RutasService, private tostr: ToastrService) { 

  }

  ngOnInit() {
    this.resetForm();
  }

  onSubmit(rutasForm: NgForm) {
    if (rutasForm.value.$key == null)
      this.rutasService.insertRuta(rutasForm.value);
    else
      this.rutasService.updateRuta(rutasForm.value);
    this.resetForm(rutasForm);
    this.tostr.success('Submitted Succcessfully', 'Employee Register');
  }



  resetForm(rutasForm?: NgForm) {
    if (rutasForm != null)
      rutasForm.reset();
    this.rutasService.selectedruta = {
      $key: null,
      nombre: '',
      descripcion: '',
      precio: 0,
    }
  }
}
