import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoserPageComponent } from './loser-page.component';

describe('LoserPageComponent', () => {
  let component: LoserPageComponent;
  let fixture: ComponentFixture<LoserPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoserPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoserPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
