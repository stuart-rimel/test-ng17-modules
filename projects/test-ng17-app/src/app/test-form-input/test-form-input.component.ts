import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-test-form-input',
  templateUrl: './test-form-input.component.html',
  styleUrl: './test-form-input.component.css',
})
export class TestFormInputComponent {
  @Input() ariaLabel: any;
  @Input() autoCapitalize: any;
  @Input() disabled: any;
  @Input() placeholder: any;
  @Input() size: any;
  @Input() required: any;

  @Output() onInputChangeEvent = new EventEmitter<CustomEvent>();

  name = new FormControl('');

  updateName() {
    this.name.setValue('Nancy');
  }

  handleInputChange($event: CustomEvent) {
    this.onInputChangeEvent.emit($event);
  }
}
