import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { StudentService } from '../services';
import { StudentApiActions } from '../actions';
@Injectable()
// export class StudentEffects {

//   loadStudents$ = createEffect(
//     () => this.actions$.pipe(),catchError(() => EMPTY))

//   constructor(
//     private actions$: Actions,
//     private studentService: StudentService
//   ) { }
// }
