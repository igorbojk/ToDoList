import { TestBed, inject } from '@angular/core/testing';

import { TodoApiService } from './todoApi.service';

describe('ApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoApiService]
    });
  });

  it('should be created', inject([TodoApiService], (service: TodoApiService) => {
    expect(service).toBeTruthy();
  }));
});
