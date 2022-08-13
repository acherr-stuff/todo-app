import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ToDoState} from "../../store/todo/todo.reducer";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-todo-create-form-ui',
  templateUrl: './todo-create-form-ui.component.html',
  styleUrls: ['./todo-create-form-ui.component.scss']
})
export class TodoCreateFormUiComponent implements OnInit {

  name = "";

  @Output()
  create = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  onCreate() {
    if (this.name) {
      this.create.emit(this.name);
      //console.log(this.name);
      this.name = ""
    }
  }

}
