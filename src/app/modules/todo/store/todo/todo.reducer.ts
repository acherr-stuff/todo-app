import {ToDo} from "../../model/todo";
import {ToDoActions, todoActionsType} from "./todo.actions";

export const TODO_DERUCER_NODE = "todo";

export interface ToDoState {
  idIncrement: number,
  todoList: ToDo[]
}

const initialState: ToDoState = {
  idIncrement: 1,
  todoList: []
}

export const todoReducer = (state = initialState, action: ToDoActions) => {
  switch (action.type) {
    case todoActionsType.create:
      return {
        ...state,
        idIncrement: state.idIncrement + 1,
        todoList: [
          ...state.todoList,
          {
            id: state.idIncrement,
            name: action.payload.name,
            completed: false
          }
        ]

    };
    case todoActionsType.delete:
      return {
        ...state,
        todoList: state.todoList.filter(todo => todo.id !== action.payload.id)
      };
    case todoActionsType.toggle:
      return {
        ...state,
        todoList: state.todoList.map(todo => todo.id === action.payload.id ? {
          ...todo,
          completed: !todo.completed
        }: todo)
      };
    case todoActionsType.edit:
      return {
        ...state,
        todoList: state.todoList.map(todo => todo.id === action.payload.id ? {
          ...todo,
          name: action.payload.name
        }: todo)
      };
    case todoActionsType.load:
      return {
        ...action.payload.state
      };
    default:
      return state;
  }

 // return state;
}
