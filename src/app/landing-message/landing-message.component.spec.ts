import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingMessageComponent } from './landing-message.component';

describe('LandingMessageComponent', () => {
  let component: LandingMessageComponent;
  let fixture: ComponentFixture<LandingMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingMessageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LandingMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
