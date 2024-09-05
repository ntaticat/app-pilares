import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinigamesPageComponent } from './minigames-page.component';

describe('MinigamesPageComponent', () => {
  let component: MinigamesPageComponent;
  let fixture: ComponentFixture<MinigamesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MinigamesPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinigamesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
