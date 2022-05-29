import { TestBed } from '@angular/core/testing';

import { Bad115ApiCoreService } from './bad115-api-core.service';

describe('Bad115ApiCoreService', () => {
  let service: Bad115ApiCoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Bad115ApiCoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
