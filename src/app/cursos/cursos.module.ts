import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';
import { CursosDetalheComponent } from './cursos-detalhe/cursos-detalhe.component';
import { CursosServiceService } from './cursos-service/cursos-service.service';


@NgModule({
  declarations: [CursosComponent, 
                 CursosDetalheComponent],
  imports: [
    CommonModule
  ],

  exports: [
    CursosComponent,
    CursosServiceService
  ]
})
export class CursosModule { }
