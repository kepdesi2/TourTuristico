import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InsertarComponent } from './insertar/insertar.component';
import { ListarComponent } from './listar/listar.component';

const routes: Routes = [
  { path: '', redirectTo: '/listar', pathMatch: 'full' },
  { path: 'insertar', component: InsertarComponent },
  { path: 'listar', component: ListarComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule {}

