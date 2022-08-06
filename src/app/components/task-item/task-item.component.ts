import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ITask } from 'src/app/models/Task';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  @Input() task?: ITask;
  @Output() onDeleteTask: EventEmitter<ITask> = new EventEmitter();

  @Output() onToggleReminder: EventEmitter<ITask> = new EventEmitter();
  
  faTrash = faTrash;
  constructor() { }

  ngOnInit(): void {
  }

  handleDeleteTask(task: ITask) {
    this.onDeleteTask.emit(task);
  }

  handleDoubleClick(task: ITask) {
    console.log('double click task  item', {task});
    this.onToggleReminder.emit(task);
  }


}
