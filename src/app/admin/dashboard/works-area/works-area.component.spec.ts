import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorksAreaComponent } from './works-area.component';

describe('WorksAreaComponent', () => {
  let component: WorksAreaComponent;
  let fixture: ComponentFixture<WorksAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorksAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorksAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
