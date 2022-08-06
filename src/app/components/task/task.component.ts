import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ITask } from 'src/app/models/Task';
import { TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
tasks: ITask[] = []


  constructor(private taskService: TaskService) {
  }


  ngOnInit(): void {
    this.taskService.getTasks().subscribe((res: any) => {
      this.tasks = res.data;
    })
  }

  addTask(task: ITask) {
    this.taskService.createTask(task).subscribe((res: any) => {
      this.tasks.push(res.data);
    }) 
  }

  deleteTask(task: ITask) {
    console.log('delete', task);
    this.taskService.deleteTask(task).subscribe((res: any) => {
      console.log('delete fr de weak', { res });
      this.tasks = this.tasks.filter(t => t.id !== task.id);
    })
  }

  onDoubleClick(task: ITask) {
    this.taskService.updateTask({...task, reminder: !task.reminder }).subscribe((res: any) => {
      console.log('toggle reminder', { res });
      task.reminder = !task.reminder;
    })
  }

}
