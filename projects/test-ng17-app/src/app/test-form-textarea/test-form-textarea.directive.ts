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
  selector: 'modus-wc-textarea',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TestFormTextareaDirective),
      multi: true,
    },
  ],
})
export class TestFormTextareaDirective implements ControlValueAccessor, OnInit {
  @Input() ariaLabel: any;
  @Input() disabled: any;
  @Input() placeholder: any;
  @Input() required: any;
  @Input() formControl!: FormControl;

  @Output() onTextareaChange = new EventEmitter<CustomEvent>();

  onChange: any = () => {};
  onTouched: any = () => {};

  private _value: string = '';

  get value() {
    return this._value;
  }

  set value(value: string) {
    if (value !== this._value) {
      this._value = value;
      this.onChange(this._value);
      this.onTouched();
      this.elementRef.nativeElement.value = value;
    }
  }

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    const modusWcTextarea = this.elementRef
      .nativeElement as HTMLModusWcTextareaElement;

    modusWcTextarea.ariaLabel = this.ariaLabel;
    modusWcTextarea.disabled = this.disabled;
    modusWcTextarea.placeholder = this.placeholder;
    modusWcTextarea.required = this.required;

    if (!this.formControl) {
      this.formControl = new FormControl('');
    }
  }

  @HostListener('textareaChange', ['$event.detail.target.value'])
  listenForValueChange(value: string) {
    this.value = value;
  }

  writeValue(value: string): void {
    if (value) {
      this.value = value;
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
