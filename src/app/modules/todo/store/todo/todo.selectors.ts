import {createFeatureSelector, createSelector} from "@ngrx/store";
import {TODO_DERUCER_NODE, ToDoState} from "./todo.reducer";
//селектор, который извлекает первый элемент объекта из хранилища
export const todoFeatureSelector = createFeatureSelector<ToDoState>(TODO_DERUCER_NODE)

export const todoListSelector = createSelector(
  todoFeatureSelector,
  state => state.todoList
)
