import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { Student } from '../../core/models';
import { AppState } from '../../core/app.state';
import { StudentActions } from 'src/app/core';
import { StudentService } from 'src/app/core/services';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public students$: Observable<Student[]>;

  constructor(
    private store: Store<AppState>,
    private studentService: StudentService
  ) {
    this.students$ = this.store.select(state => state.students);
  }

  ngOnInit() {
    this.studentService.getAllStudents().subscribe((students: Student[]) => {
      for (let student of students) {
        this.store.dispatch(new StudentActions.AddStudent(student));
      }
    });
  }

}
