import { Todo } from './../Models/todo.model';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todos: Todo[] = []; // vazio
  //public todos: any[]; // undefined
  public title: String ='Minhas Tarefas';
  public form: FormGroup;

  /**
   *
   */
  //FIXME
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      title: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(60),
        Validators.required
      ])]
    })

    this.load();

    // this.todos.push(new Todo(1,'Acordar', false));
    // this.todos.push(new Todo(2,'Trabalhar', false));
    // this.todos.push(new Todo(3,'Estudar', true));

  }

add(){
  const title = this.form.controls['title'].value;
  const id = this.todos.length + 1;
  this.todos.push(new Todo(id,title,false));
  this.save();
  this.clear();
}

clear(){
  this.form.reset();
}


 remove(todo: Todo) {
  const index = this.todos.indexOf(todo);
  if(index !== -1){
    this.todos.splice(index, 1);
  }
  this.save();
 }

 marcarComoConcluido(todo: Todo) {
  todo.done = true;
  this.save();
  this.save();
 }

 marcarComoNaoConcluido(todo: Todo){
  todo.done = false;
  this.save();
 }


  alterarTexto(){
    this.title = 'Teste';
  }


  save(){
    const data = JSON.stringify(this.todos);
    localStorage.setItem('todos', data);
  }

 load(){
  this.todos = JSON.parse(localStorage.getItem('todos') || '{}');
}

}

