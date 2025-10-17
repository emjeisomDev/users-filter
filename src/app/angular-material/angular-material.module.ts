import { NgModule } from '@angular/core';

import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';


@NgModule({
  imports: [
    MatListModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatDividerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatDatepickerModule,
  ],
  exports: [
    MatListModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatDividerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatDatepickerModule,
  ]
})
export class AngularMaterialModule { }
