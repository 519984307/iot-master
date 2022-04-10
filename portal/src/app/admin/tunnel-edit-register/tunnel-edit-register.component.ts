import {Component, forwardRef, OnInit} from '@angular/core';
import {ControlValueAccessor, FormBuilder, FormGroup, NG_VALUE_ACCESSOR, Validators} from "@angular/forms";

@Component({
  selector: 'app-tunnel-edit-register',
  templateUrl: './tunnel-edit-register.component.html',
  styleUrls: ['./tunnel-edit-register.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TunnelEditRegisterComponent),
      multi: true
    }
  ]
})
export class TunnelEditRegisterComponent implements OnInit, ControlValueAccessor {
  onChanged: any = () => {
  }
  onTouched: any = () => {
  }

  data: any = {};
  formGroup = new FormGroup({});

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.formGroup = this.fb.group({
      enable: [this.data.enable, [Validators.required]],
      regex: [this.data.regex, []],
    })
  }


  change() {
    this.formGroup.markAsDirty();
    this.formGroup.updateValueAndValidity();
    this.onChanged(this.formGroup.value);
    this.onTouched();
  }

  registerOnChange(fn: any): void {
    this.onChanged = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(obj: any): void {
    this.data = obj || {};
    this.buildForm();
  }

}
