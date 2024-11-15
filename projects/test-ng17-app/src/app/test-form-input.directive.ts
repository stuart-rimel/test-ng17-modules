import {
  Directive,
  ElementRef,
  EventEmitter,
  forwardRef,
  HostListener,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Directive({
  selector: 'modus-wc-text-input',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TestFormInputDirective),
      multi: true,
    },
  ],
})
export class TestFormInputDirective implements ControlValueAccessor, OnInit {
  @Input() ariaLabel: any;
  @Input() autoCapitalize: any;
  @Input() disabled: any;
  @Input() placeholder: any;
  @Input() size: any;
  @Input() required: any;
  @Input() type: any;
  @Input() value: any;
  @Input() formControl!: FormControl;

  @Output() onInputChangeEvent = new EventEmitter<CustomEvent>();

  onChange: any = () => {};
  onTouched: any = () => {};

  private _inputValue: string = '';

  get inputValue() {
    return this._inputValue;
  }

  set inputValue(value: string) {
    if (value !== this._inputValue) {
      this._inputValue = value;
      this.onChange(this._inputValue);
      this.onTouched();
      this.elementRef.nativeElement.value = value;
    }
  }

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    const modusWcTextInput = this.elementRef
      .nativeElement as HTMLModusWcTextInputElement;

    modusWcTextInput.ariaLabel = this.ariaLabel;
    modusWcTextInput.autoCapitalize = this.autoCapitalize;
    modusWcTextInput.placeholder = this.placeholder;
    modusWcTextInput.size = this.size;
    modusWcTextInput.required = this.required;
    modusWcTextInput.type = this.type;
    modusWcTextInput.value = this.value;

    if (!this.formControl) {
      this.formControl = new FormControl(null);
    }
  }

  @HostListener('inputChange', ['$event'])
  listenForValueChange(value: string): void {
    this.inputValue = value;
  }

  writeValue(value: string): void {
    if (value) {
      this.inputValue = value;
    }
  }

  registerOnChange(fn: Function): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
