import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {StudentFormModule} from '../shared/student-form/student-form.module';

import { StudentRoutingModule } from './student-routing.module';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';



@NgModule({
  declarations: [CreateComponent, EditComponent, ListComponent, ViewComponent],
  imports: [
    CommonModule,
    StudentRoutingModule,
    StudentFormModule
  ]
})
export class StudentModule { }
