import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CustomMaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FlexLayoutModule,
    CustomMaterialModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    FlexLayoutModule,
    CustomMaterialModule,
    ReactiveFormsModule,
    FormsModule  ]
})
export class CoreModule { }
