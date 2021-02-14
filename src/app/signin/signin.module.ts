import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SigninRoutingModule } from './signin-routing.module';
import { SigninComponent } from './signin.component';
import { CoreModule } from '@core/core.module';


@NgModule({
  declarations: [SigninComponent],
  imports: [
    CommonModule,
    CoreModule,
    SigninRoutingModule
  ]
})
export class SigninModule { }
