import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectibleNewPageComponent } from './collectible-new-page.component';

describe('CollectibleNewPageComponent', () => {
  let component: CollectibleNewPageComponent;
  let fixture: ComponentFixture<CollectibleNewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CollectibleNewPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollectibleNewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
