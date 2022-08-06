import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ITask } from 'src/app/models/Task';
import { UiService } from 'src/app/service/ui.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  @Output() onAddTask: EventEmitter<ITask> = new EventEmitter();

  text: string = '';
  day: string = '';
  showAddTask: boolean = false;
  reminder: boolean = false;

  constructor(private uiService: UiService) { 
    this.uiService.onToggle().subscribe(
      (value) => {
        this.showAddTask = value;
      }
    );
  }

  ngOnInit(): void {
  }

  onSubmitTask() {
    if (!this.text ) {
      alert('Please enter a task!');
      return;
    }

    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    };

    this.onAddTask.emit(newTask);

    this.text = '';
    this.day = '';
    this.reminder = false;
      
  }

}
