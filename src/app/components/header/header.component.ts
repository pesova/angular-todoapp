import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/service/ui.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title: string = 'Task Tracker';
  showAddTask: boolean = false;

  constructor(private uiService: UiService, private router: Router) { 
    this.uiService.onToggle().subscribe(
      (value: boolean) => {
        this.showAddTask = value;
      }
    );
  }

  ngOnInit(): void {
  }

  toggleAddTask(){
    this.uiService.toggleAddTask();
  }

  hasRoute(route: string): boolean {
    return this.router.url === route;
  }

}
