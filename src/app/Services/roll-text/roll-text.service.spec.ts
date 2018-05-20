import { TestBed, inject } from '@angular/core/testing';

import { RollTextService } from './roll-text.service';

describe('RollTextService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RollTextService]
    });
  });

  it('should be created', inject([RollTextService], (service: RollTextService) => {
    expect(service).toBeTruthy();
  }));
});
