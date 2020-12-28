import { TestBed } from '@angular/core/testing';

import { RoomCreatorService } from './room-creator.service';

describe('RoomCreatorService', () => {
  let service: RoomCreatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoomCreatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
