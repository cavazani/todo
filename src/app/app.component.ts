import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todos: any[] = []; // vazio
  //public todos: any[]; // undefined

  /**
   *
   */
  constructor() {
    this.todos.push('teste 1');
    this.todos.push('teste 2');
    this.todos.push('teste 3');
    this.todos.push(0);
    this.todos.push(1999);
    this.todos.push({message:'teste 3'});
    this.todos.push(new Date);

  }
}
