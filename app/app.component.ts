import {Component} from '@angular/core';
import  { TodoListComponent } from './todo/todo-list.component'

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css'],
    directives: [TodoListComponent]
})
export class AppComponent {
    title: string;
    todos: string[];

    constructor () {
        this.title = 'Angular2';
        this.todos = ['Изучить javascript', 'изучить ES6']
    }

    addTodo(title: string) {
            this.todos.push(title);

        /*let title = input.value;
        input.value = '';
        console.log('Добавление задачи: ');
        this.todos.push(title)*/
    }
}
