import {Action} from "@ngrx/store";
export enum todoActionsType {
  create = "[TODO] create todo item",
  delete = "[TODO] delete todo item",
  toggle = "[TODO] toggle todo item",
  edit = "[TODO] edit todo item"
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


//экспортируем набор экшенов, которые у нас есть
export type ToDoActions = ToDoCreateAction | ToDoDeleteAction | ToDoToggleAction | ToDoEditAction;
