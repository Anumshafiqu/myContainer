import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentionsPageComponent } from './mentions-page.component';

describe('MentionsPageComponent', () => {
  let component: MentionsPageComponent;
  let fixture: ComponentFixture<MentionsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MentionsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MentionsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
