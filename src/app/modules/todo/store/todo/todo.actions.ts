import {Action} from "@ngrx/store";
import {ToDoState} from "./todo.reducer";
export enum todoActionsType {
  create = "[TODO] create todo item",
  delete = "[TODO] delete todo item",
  toggle = "[TODO] toggle todo item",
  edit = "[TODO] edit todo item",
  load = "[TODO] load todo state"
}

//передаем имя нового item в action в полезной нагрузке, чтобы создать новую запись; генерайия id будет в reducer
export class ToDoCreateAction implements Action {
  readonly type = todoActionsType.create;
  constructor(public payload: {name: string}) {
  }
}

export class ToDoDeleteAction implements Action {
  readonly type = todoActionsType.delete;

  constructor(public payload: {id: number}) {
  }
}

export class ToDoToggleAction implements Action {
  readonly type = todoActionsType.toggle;

  constructor(public payload: {id: number}) {
  }
}

export class ToDoEditAction implements Action {
  readonly type = todoActionsType.edit;

  constructor(public payload: {id: number, name: string}) {
  }
}

export class ToDoLoadStateAction implements Action {
  readonly type = todoActionsType.load;

  constructor(public payload: {state: ToDoState}) {
  }
}


//экспортируем набор экшенов, которые у нас есть
export type ToDoActions = ToDoCreateAction | ToDoDeleteAction | ToDoToggleAction | ToDoEditAction | ToDoLoadStateAction;
