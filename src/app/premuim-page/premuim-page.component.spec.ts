import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremuimPageComponent } from './premuim-page.component';

describe('PremuimPageComponent', () => {
  let component: PremuimPageComponent;
  let fixture: ComponentFixture<PremuimPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PremuimPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PremuimPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
