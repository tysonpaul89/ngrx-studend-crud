import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {StudentFormModule} from '../shared/index';

import { StudentRoutingModule } from './student-routing.module';
import {CreateComponent, EditComponent, ListComponent, ViewComponent} from './index';



@NgModule({
  declarations: [CreateComponent, EditComponent, ListComponent, ViewComponent],
  imports: [
    CommonModule,
    StudentRoutingModule,
    StudentFormModule
  ]
})
export class StudentModule { }
