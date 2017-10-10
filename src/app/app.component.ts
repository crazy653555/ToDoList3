import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  inputHint = '請輸入待辦事項？';
  colspanCount = 6;

  todos: any[] = [];
  todo = '';

  filterType = 'false';

  isToggleAll = false;


  AddTodo() {
    if (this.todo) {
      let newTodo = {
        text: this.todo,
        done: false
      };

      this.dataSvc.AddTodo(newTodo)
        .subscribe(data => {
          this.todos = [...this.todos, data];
          this.todo = '';
        });
    }
  }

  constructor(private dataSvc: DataService) { }

  todoModelChange($event) {
    this.todo = $event;
  }

  clearCompleted() {
    this.todos.filter(item => item.done).forEach(todo => {
      this.removeTodo(todo);
    });
  }

  updateFilterType($event) {
    this.filterType = $event;
    console.log($event);
  }

  toggleAll() {
    console.log(this.isToggleAll);
    this.todos.forEach(item => {
      item.done = this.isToggleAll;
    });
  }

  removeTodo(todo) {
    this.dataSvc.removeTodo(todo)
      .subscribe(data => {
        this.todos = this.todos.filter(item => item !== todo);
      });
  }

  ngOnInit(): void {
    this.dataSvc.getTodos()
      .subscribe(data => {
        this.todos = data;
      });
  }

  updateTodo(todo) {
    this.dataSvc.updateTodo(todo).subscribe();
  }
}
