import { TestBed, inject } from '@angular/core/testing';

import { ContactService } from './contact.service';

import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('ContactService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ContactService]
    });
  });

  it('should be created', inject([ContactService], (service: ContactService) => {
    expect(service).toBeTruthy();
  }));

  it('should send POST',
    inject(
      [HttpTestingController, ContactService],
      (httpMock: HttpTestingController, contactService: ContactService) => {
        
      }
    )
  );
});
