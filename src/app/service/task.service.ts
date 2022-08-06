import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ITask } from '../models/Task';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = 'http://localhost:8090/api/task';

//   tasks: ITask[] = [
//     {
//         id: 1,
//         text: "first",
//         day: "Mar 24 2022 12:00:00",
//         completed: false,
//         reminder: false,
//         created_at: "2022-08-02T21:47:10.000000Z",
//         updated_at: "2022-08-02T21:47:10.000000Z"
//     },
//     {
//         id: 3,
//         text: "sedcc",
//         day: "Mar 24th 2022 6:00",
//         completed: false,
//         reminder: false,
//         created_at: "2022-08-02T22:06:19.000000Z",
//         updated_at: "2022-08-02T22:06:19.000000Z"
//     },
// ]

  constructor(private http: HttpClient) { }

  getTasks(): Observable<ITask[]> {
    return this.http.get<ITask[]>(this.apiUrl);
  }

  createTask(task: ITask): Observable<ITask> {
    return this.http.post<ITask>(this.apiUrl, task);
  }

  updateTask(task: ITask): Observable<ITask> {
    return this.http.put<ITask>(`${this.apiUrl}/${task.id}`, task, httpOptions);
  }

  deleteTask(task: ITask): Observable<ITask> {
    return this.http.delete<ITask>(`${this.apiUrl}/${task.id}`);
  }
  
}
