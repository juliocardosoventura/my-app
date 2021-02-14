import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  formGroup: FormGroup;
  inputType = 'password';
  visible = false;

  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
          email: new FormControl(null, [Validators.required, Validators.email]),
          password: new FormControl(null, [Validators.required])
    });
  }

  ngOnInit(): void { }

  toggleVisibility(): void {
    this.inputType = this.visible ? 'password' : 'text';
    this.visible = !this.visible;
  }

  submit(): void {}
}
