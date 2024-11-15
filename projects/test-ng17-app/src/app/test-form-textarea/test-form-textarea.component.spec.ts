import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestFormTextareaComponent } from './test-form-textarea.component';

describe('TestFormTextareaComponent', () => {
  let component: TestFormTextareaComponent;
  let fixture: ComponentFixture<TestFormTextareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestFormTextareaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestFormTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
