import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectiblePageComponent } from './collectible-page.component';

describe('CollectiblePageComponent', () => {
  let component: CollectiblePageComponent;
  let fixture: ComponentFixture<CollectiblePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CollectiblePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollectiblePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
