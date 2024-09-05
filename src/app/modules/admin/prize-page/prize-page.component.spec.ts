import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrizePageComponent } from './prize-page.component';

describe('PrizePageComponent', () => {
  let component: PrizePageComponent;
  let fixture: ComponentFixture<PrizePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrizePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrizePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
