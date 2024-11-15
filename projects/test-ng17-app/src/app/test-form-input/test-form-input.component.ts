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
  @Input() placeholder: any;
  @Input() size: any;
  @Input() required: any;
  @Input() type: any;
  @Input() value: any;
  @Input() formControl!: FormControl;

  @Output() onInputChangeEvent = new EventEmitter<CustomEvent>();

  handleInputChange($event: CustomEvent) {
    this.onInputChangeEvent.emit($event);
  }
}
