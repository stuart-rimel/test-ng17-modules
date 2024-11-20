import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-test-form-textarea',
  templateUrl: './test-form-textarea.component.html',
  styleUrl: './test-form-textarea.component.css',
})
export class TestFormTextareaComponent {
  @Input() ariaLabel: any;
  @Input() disabled: any;
  @Input() placeholder: any;
  @Input() required: any;

  @Output() onTextareaChange = new EventEmitter<CustomEvent>();

  description = new FormControl('');

  handleTextareaChange($event: CustomEvent) {
    this.onTextareaChange.emit($event);
  }

  updateDescription() {
    this.description.setValue('Nancy');
  }
}
