import { Component } from '@angular/core';
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

  onSubmit() {
    console.warn(this.testForm.value);
  }
}
