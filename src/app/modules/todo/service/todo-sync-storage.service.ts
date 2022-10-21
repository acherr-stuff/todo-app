import { Injectable } from '@angular/core';
import {select, Store} from "@ngrx/store";
import {ToDoState} from "../store/todo/todo.reducer";
import {todoFeatureSelector} from "../store/todo/todo.selectors";
import {filter} from "rxjs/operators";
import {ToDoLoadStateAction} from "../store/todo/todo.actions";

export const TODO_LOCALSTORAGE_KEY = "todo"

@Injectable({
  providedIn: 'root'
})
export class TodoSyncStorageService {
  private isInit = false;

  constructor(private store$: Store<ToDoState>) { }

  init() {
    if (this.isInit) {
      return;
    }

    this.isInit = true;
    this.loadFromStorage();
    // в filter проверяем, не пришла ли нам пустота
    this.store$.pipe(
      select(todoFeatureSelector),
      filter(state => !!state)
      ).subscribe(state => {
      localStorage.setItem(TODO_LOCALSTORAGE_KEY, JSON.stringify(state))
    });

    window.addEventListener("storage", () => {
      this.loadFromStorage();
    })
  }

  private loadFromStorage() {
    const storageState = localStorage.getItem(TODO_LOCALSTORAGE_KEY);
    if (storageState) {
      this.store$.dispatch(new ToDoLoadStateAction({
        state: JSON.parse(storageState)
      }))
    }
  }
}
