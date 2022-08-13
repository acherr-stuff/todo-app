import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListItemUiComponent } from './todo-list-item-ui.component';

describe('TodoListItemUiComponent', () => {
  let component: TodoListItemUiComponent;
  let fixture: ComponentFixture<TodoListItemUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoListItemUiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoListItemUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
