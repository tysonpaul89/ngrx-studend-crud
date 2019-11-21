import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Student } from '../models';

@Injectable()
export class StudentService {
  private serviceUrl = 'http://localhost:3300/';

  constructor(public http: HttpClient) {}

  /**
   * Get all student data
   */
  getAllStudents() {
    const url = this.serviceUrl + 'students';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };

    return this.http.get(url, httpOptions);
  }
}
