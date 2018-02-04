/*
import {async, inject, TestBed} from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import {ContactService} from './contact.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {HttpResponse, HttpClient, HttpHeaders} from '@angular/common/http';

describe('ContactService', () => {

  let httpMock: HttpTestingController;

  beforeEach(async(() => {
    // service stubs for testing
    const contactServiceStub = () => {
      return {
        status: 'ok'
      };
    };

    TestBed.configureTestingModule({
      schemas: [ NO_ERRORS_SCHEMA ],
      imports: [ HttpClientTestingModule ],
      providers: [
        { provide: ContactService, useValue: contactServiceStub }
      ]
    })
      .compileComponents();
  }));

  beforeEach(
    async(
      inject([HttpTestingController], _httpMock => {
        httpMock = _httpMock;
      })
    )
  );

  afterEach(
    inject([HttpTestingController], (httpMock: HttpTestingController) => {
      httpMock.verify();
    })
  );

  it('should call onSubmit', () => {

  });
});
*/
