import { Component, OnInit } from '@angular/core';
import { ITodo } from '../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})

export class TodosComponent implements OnInit {

  todos: ITodo[] = [
    {
      id: 1,
      title: 'Learn Angular',
      completed: false
    },
    {
      id: 2,
      title: 'Learn TypeScript',
      completed: false
    },
    {
      id: 3,
      title: 'Learn JavaScript',
      completed: false
    }
  ];

  constructor() {

   }

  ngOnInit(): void {

    // this.todos = [
    //   {
    //     id: 1,
    //     title: 'Learn Angular',
    //     completed: false
    //   },
    //   {
    //     id: 2,
    //     title: 'Learn TypeScript',
    //     completed: false
    //   },
    //   {
    //     id: 3,
    //     title: 'Learn JavaScript',
    //     completed: false
    //   }
    // ];
  }

}
