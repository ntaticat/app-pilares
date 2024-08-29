import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengeNewPageComponent } from './challenge-new-page.component';

describe('ChallengeNewPageComponent', () => {
  let component: ChallengeNewPageComponent;
  let fixture: ComponentFixture<ChallengeNewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChallengeNewPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChallengeNewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
