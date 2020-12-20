import { TestBed } from '@angular/core/testing';

import { ShowCreationService } from './show-creation.service';

describe('ShowCreationService', () => {
  let service: ShowCreationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowCreationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
