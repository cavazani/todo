import { Todo } from './../Models/todo.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todos: Todo[] = []; // vazio
  //public todos: any[]; // undefined
  public title: String ='Minhas Tarefas';

  /**
   *
   */
  constructor() {
    this.todos.push(new Todo(1,'Acordar', false));
    this.todos.push(new Todo(2,'Trabalhar', false));
    this.todos.push(new Todo(3,'Estudar', true));

  }

  alterarTexto(){
    this.title = 'Teste';
  }
}
