import { Action } from '@ngrx/store';
import { Student } from '../models';

export const ADD_STUDENT = '[Student] Add';
export const DELETE_STUDENT = '[Student] Delete';

export class AddStudent implements Action {
  readonly type = ADD_STUDENT;

  constructor(public payload: Student) { }
}

export class DeleteStudent implements Action {
  readonly type = DELETE_STUDENT;

  constructor(public payload: string) { }
}


export type Actions = AddStudent | DeleteStudent;
