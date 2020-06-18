import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CatRoutingModule } from './cat-routing.module';
import { CatComponent } from './cat.component';
import { CatListComponent } from './cat-list/cat-list.component';
import { CatFormComponent } from './cat-form/cat-form.component';

@NgModule({
  declarations: [
    CatComponent,
    CatListComponent,
    CatFormComponent
  ],
  imports: [
    CommonModule,
    CatRoutingModule,
    FormsModule
  ],
})
export class CatModule { }
