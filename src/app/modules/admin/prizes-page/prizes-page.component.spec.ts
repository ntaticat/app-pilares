import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrizesPageComponent } from './prizes-page.component';

describe('PrizesPageComponent', () => {
  let component: PrizesPageComponent;
  let fixture: ComponentFixture<PrizesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrizesPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrizesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
