import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-test-form-textarea',
  templateUrl: './test-form-textarea.component.html',
  styleUrl: './test-form-textarea.component.css',
})
export class TestFormTextareaComponent {
  description = new FormControl('');

  updateDescription() {
    this.description.setValue('This is a description.');
  }
}
