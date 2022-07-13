import { TestBed } from '@angular/core/testing';

import { CursosServiceService } from './cursos-service.service';

describe('CursosServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CursosServiceService = TestBed.get(CursosServiceService);
    expect(service).toBeTruthy();
  });
});
