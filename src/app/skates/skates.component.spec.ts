import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkatesComponent } from './skates.component';

describe('SkatesComponent', () => {
  let component: SkatesComponent;
  let fixture: ComponentFixture<SkatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
