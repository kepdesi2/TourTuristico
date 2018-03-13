import { Component, OnInit } from '@angular/core';
import { RutasService } from '../../../servicio/rutas.service'

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css'],
  providers :[RutasService]
})
export class ListarComponent implements OnInit {

  constructor(private rutasService : RutasService) { }

  ngOnInit() {
  }

}
