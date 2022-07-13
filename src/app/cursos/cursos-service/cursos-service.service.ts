import { Injectable } from '@angular/core';
import { CursosComponent } from '../cursos.component';

@Injectable({
  providedIn: 'root'
})
export class CursosServiceService {

  constructor() { }

  getCursos(){
    return ['NodeJS', 'React','Angular']
  }
}
