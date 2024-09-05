import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinigamePageComponent } from './minigame-page.component';

describe('MinigamePageComponent', () => {
  let component: MinigamePageComponent;
  let fixture: ComponentFixture<MinigamePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MinigamePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinigamePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
