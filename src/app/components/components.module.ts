import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";

import { PipesModule } from "../Pipes/pipes.module";
import { AngularMaterialModule } from "../angular-material/angular-material.module";

import { FilterComponent } from './filter/filter.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';

@NgModule({
  declarations: [
    UserDetailsComponent,
    FilterComponent,
    UsersListComponent
  ],
  imports: [
    PipesModule,
    FormsModule,
    CommonModule,
    AngularMaterialModule,
  ],
  exports: [
    FormsModule,
    FilterComponent,
    UsersListComponent,
    UserDetailsComponent,
  ]
})
export class ComponentsModule { }