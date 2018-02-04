import {async, ComponentFixture, inject, TestBed} from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { ContactComponent } from './contact.component';
import {FormBuilder} from '@angular/forms';
import {ValidationService} from './validation.service';
import {ContactService} from './contact.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/from';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

// service stubs for testing
  const validationServiceStub = {};
  let service: ContactService;
  beforeEach(async(() => {

    service = new ContactService(null);

    TestBed.configureTestingModule({
      declarations: [ ContactComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
      imports: [ RouterTestingModule],
      providers: [
        FormBuilder,
        { provide: ValidationService, useValue: validationServiceStub },
        { provide: ContactService, useValue: service }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
      fixture = TestBed.createComponent(ContactComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    }
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call sendEmail method on ContactService', () => {
    const spy = spyOn(service, 'sendEmail').and.returnValue(Observable.empty());
    component.onSubmit({});
    expect(spy).toHaveBeenCalled();
  });

  it('should set value of \'messageWasSent\' to response status code', () => {
    spyOn(service, 'sendEmail').and.returnValue(Observable.from([{status: 200}]));
    component.onSubmit({});
    expect(typeof component.messageWasSent).toBe('number');
  });
});
