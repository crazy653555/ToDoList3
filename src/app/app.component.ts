import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputHint = '請輸入待辦事項？';
  colspanCount = 6;

  todos: any[] = [];
  todo = '';


  AddTodo() {
    if (this.todo) {
     let newTodo = {
        text: this.todo,
        done: false
      };
      this.todos = [...this.todos, newTodo];
      this.todo = '';
    }
  }

  todoModelChange($event) {
    this.todo = $event;
  }
}
