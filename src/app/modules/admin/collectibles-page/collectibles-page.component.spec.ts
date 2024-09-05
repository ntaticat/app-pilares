import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectiblesPageComponent } from './collectibles-page.component';

describe('CollectiblesPageComponent', () => {
  let component: CollectiblesPageComponent;
  let fixture: ComponentFixture<CollectiblesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CollectiblesPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollectiblesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
