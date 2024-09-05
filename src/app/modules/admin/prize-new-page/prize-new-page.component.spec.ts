import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrizeNewPageComponent } from './prize-new-page.component';

describe('PrizeNewPageComponent', () => {
  let component: PrizeNewPageComponent;
  let fixture: ComponentFixture<PrizeNewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrizeNewPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrizeNewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
