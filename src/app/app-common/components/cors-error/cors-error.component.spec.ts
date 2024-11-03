import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorsErrorComponent } from './cors-error.component';

describe('CorsErrorComponent', () => {
  let component: CorsErrorComponent;
  let fixture: ComponentFixture<CorsErrorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CorsErrorComponent]
    });
    fixture = TestBed.createComponent(CorsErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
