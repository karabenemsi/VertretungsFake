import { TestBed, inject } from '@angular/core/testing';

import { SubstituteService } from './substitute.service';

describe('SubstituteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SubstituteService]
    });
  });

  it('should be created', inject([SubstituteService], (service: SubstituteService) => {
    expect(service).toBeTruthy();
  }));
});
