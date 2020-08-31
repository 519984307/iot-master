import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  validateForm!: FormGroup;

  constructor(private fb: FormBuilder, private ca: ApiService, private router: Router) {}

  submitForm(): void {
    console.log('submit form');
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    if (!this.validateForm.valid) {
      return;
    }

    this.ca.post('login', this.validateForm.value).subscribe(res => {
      console.log('res:', res);
      this.router.navigate(['/admin/dash']);
    }, err => {
      console.log('err:', err);
    });
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [false]
    });
  }
}
