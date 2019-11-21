import { Action } from '@ngrx/store';
import { Student } from '../models';

export const LOAD_STUDENT = '[Student] Load';
export const LOAD_STUDENT_SUCCESS = '[Student] Load Success';

export class LoadStudent implements Action {
  readonly type = LOAD_STUDENT;
}

export class LoadStudentSuccess implements Action {
  readonly type = LOAD_STUDENT_SUCCESS;

  constructor(public payload: Student[]) { }
}


export type Actions = LoadStudent | LoadStudentSuccess;
