import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewjobsPageComponent } from './newjobs-page.component';

describe('NewjobsPageComponent', () => {
  let component: NewjobsPageComponent;
  let fixture: ComponentFixture<NewjobsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewjobsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewjobsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
