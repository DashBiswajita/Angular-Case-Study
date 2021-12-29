import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicDivsComponent } from './dynamic-divs.component';

describe('DynamicDivsComponent', () => {
  let component: DynamicDivsComponent;
  let fixture: ComponentFixture<DynamicDivsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicDivsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicDivsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
