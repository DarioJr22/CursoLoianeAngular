import { Component, OnInit } from '@angular/core';
import { CursosServiceService } from './cursos-service/cursos-service.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent  {

  nomePortal: string;
  cursos:string[]


  constructor( private cursosService: CursosServiceService) { 
    this.nomePortal = 'http://loiane.training'
    this.cursos = this.cursosService.getCursos()
  }

 
}
