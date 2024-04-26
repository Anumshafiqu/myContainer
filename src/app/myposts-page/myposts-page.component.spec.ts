import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MypostsPageComponent } from './myposts-page.component';

describe('MypostsPageComponent', () => {
  let component: MypostsPageComponent;
  let fixture: ComponentFixture<MypostsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MypostsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MypostsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
