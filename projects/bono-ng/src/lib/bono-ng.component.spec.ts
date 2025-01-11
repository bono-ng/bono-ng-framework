import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BonoNgComponent } from './bono-ng.component';

describe('BonoNgComponent', () => {
  let component: BonoNgComponent;
  let fixture: ComponentFixture<BonoNgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BonoNgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BonoNgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
