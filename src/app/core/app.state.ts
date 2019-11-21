import { Student } from './models';

export interface AppState {
  readonly students: Student[];
}
