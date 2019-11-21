import { Action } from '@ngrx/store';
import { Student } from '../models';
import { StudentActions } from '../actions';

// const initialState: Student = {name: 'Tyson', age: 11, dob: '1989-01-20', _id: 'i8YFNzMP21q9EnJf'}

export function studentReducer(state: Student[] = [], action: StudentActions.Actions) {
  switch (action.type) {
    case StudentActions.ADD_STUDENT:
      return [...state, action.payload];
    default:
      return state;
  }
}
