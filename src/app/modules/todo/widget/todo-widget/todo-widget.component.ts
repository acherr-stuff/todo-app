//дна из целей виджжета - т к большинство вещей в ангуляр основаны на jbservable, то часто используется pipe async, поэтому виджет используется как прослойка, делает async его в дочерний компонент, и дочерний получает уже извлеченное значение, и следит за изменениями благодаря изменению @input

import { Component, OnInit } from '@angular/core';
import {select, Store} from "@ngrx/store";
import {ToDoState} from "../../store/todo/todo.reducer";


import {ToDoCreateAction, ToDoDeleteAction, ToDoEditAction, ToDoToggleAction} from "../../store/todo/todo.actions";
import {todoListSelector} from "../../store/todo/todo.selectors";
import {Observable} from "rxjs";
import {ToDo} from "../../model/todo";
//import {Observable} from "rxjs";

@Component({
  selector: 'app-todo-widget',
  templateUrl: './todo-widget.component.html',
  styleUrls: ['./todo-widget.component.scss']
})
export class TodoWidgetComponent implements OnInit {

  todoList = [];
  constructor(private store$: Store<ToDoState>) { }
  todoList$: Observable<ToDo[]> = this.store$.pipe(select(todoListSelector));

  ngOnInit(): void {
  }

  onCreate(name: string) {
    console.log(name);
    //говорим хранилищу, что у нас произошло то или иное событие, и отправляем имя в хранилище
    this.store$.dispatch(new ToDoCreateAction({name}))
  }

  onDelete(id: number) {
    this.store$.dispatch(new ToDoDeleteAction({id}))
  }

  onToggle(id: number) {
    this.store$.dispatch(new ToDoToggleAction({id}))
  }

  //@ts-ignore
  onEdit({ id, name }) {
    console.log("widget: ", {id, name})
    this.store$.dispatch(new ToDoEditAction({id, name}))
  }
}
