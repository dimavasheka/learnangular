import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css']
})
export class AppComponent {
    title: string;
    todos: string[];

    constructor () {
        this.title = 'Angular2';
        this.todos = ['Изучить javascript', 'изучить ES6']
    }

    addTodo(input: HTMLInputElement) {
        let title = input.value;
        input.value = '';
        console.log('Добавление задачи: ');
        this.todos.push(input.value)
    }
}
