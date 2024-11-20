import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrl: './test-form.component.css',
  standalone: false,
})
export class TestFormComponent {
  testForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
  });

  @Output() onDataSubmit = new EventEmitter();

  onSubmit() {
    console.warn(this.testForm.value);
    alert(`Form submitted \n ${JSON.stringify(this.testForm.value)}`);
  }
}
