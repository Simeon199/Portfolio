import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyButtonStyleComponent } from './technology-button-style.component';

describe('TechnologyButtonStyleComponent', () => {
  let component: TechnologyButtonStyleComponent;
  let fixture: ComponentFixture<TechnologyButtonStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechnologyButtonStyleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TechnologyButtonStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
