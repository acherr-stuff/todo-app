import { TestBed } from '@angular/core/testing';

import { TodoSyncStorageService } from './todo-sync-storage.service';

describe('TodoSyncStorageService', () => {
  let service: TodoSyncStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoSyncStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
