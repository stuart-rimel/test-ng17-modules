import { Component } from '@angular/core';
import { ModusWcTextInputCustomEvent } from '@trimble-cms/modus-wc';

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrl: './test-form.component.css',
})
export class TestFormComponent {
  handleInputChange($event: CustomEvent) {
    const value = $event.detail.target.value;
    console.log('input changed:', value);
  }
}
