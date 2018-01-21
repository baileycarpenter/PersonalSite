import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { ContactComponent } from './contact.component';
import {FormBuilder, FormControl} from '@angular/forms';
import {ValidationService} from './validation.service';
import {ContactService} from './contact.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {HttpResponse} from '@angular/common/http';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async(() => {
    // service stubs for testing
    const validationServiceStub = {};
    const contactServiceStub = {};

    TestBed.configureTestingModule({
      declarations: [ ContactComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
      imports: [ RouterTestingModule, HttpClientTestingModule],
      providers: [
        FormBuilder,
        { provide: ValidationService, useValue: validationServiceStub },
        { provide: ContactService, useValue: contactServiceStub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {

    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
