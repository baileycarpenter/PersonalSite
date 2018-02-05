import {async, ComponentFixture, inject, TestBed} from '@angular/core/testing';
import {DebugElement, NO_ERRORS_SCHEMA} from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { ContactComponent } from './contact.component';
import {FormBuilder, FormControl} from '@angular/forms';
import {ValidationService} from './validation.service';
import {ContactService} from './contact.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/throw';


describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;
  let validationService: ValidationService;
  let service: ContactService;
  beforeEach(async(() => {
    service = new ContactService(null);
    validationService = new ValidationService();
    TestBed.configureTestingModule({
      declarations: [ ContactComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
      imports: [ RouterTestingModule],
      providers: [
        FormBuilder,
        { provide: ValidationService, useValue: validationService },
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

  describe('Form', () => {
    it('should contain \'name\' control', () => {
      expect(component.contactForm.contains('name')).toBeTruthy();
    });
    it('should contain \'email\' control', () => {
      expect(component.contactForm.contains('email')).toBeTruthy();
    });
    it('should contain \'message\' control', () => {
      expect(component.contactForm.contains('email')).toBeTruthy();
    });

    it('should make input controls required', () => {
      const name = component.contactForm.get('name');
      const email = component.contactForm.get('email');
      const message = component.contactForm.get('message');

      name.setValue('');
      email.setValue('');
      message.setValue('');

      expect(name.valid).toBeFalsy();
      expect(email.valid).toBeFalsy();
      expect(message.valid).toBeFalsy();
    });

    it('should make email control invalid by wrong not matching regex', () => {
      spyOn(validationService, 'emailValidator').and.callFake((control) => {
        if (!control.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
          return {invalidEmail: true};
        }
      });
      const email = component.contactForm.get('email');
      email.setValue('dgdgdfg');
      expect(email.valid).toBeFalsy();
    });

    it('should make name control invalid by not matching regex', () => {
      spyOn(validationService, 'emailValidator').and.callFake((control) => {
        if (control.value.match(/[0-9]/)) {
            return {invalidName: true};
          }
      });
      const name = component.contactForm.get('name');
      name.setValue('8');
      expect(name.valid).toBeFalsy();
    });
  });

  describe('onSubmit', () => {
    it('should call sendEmail method on ContactService', () => {
      const spyService = spyOn(service, 'sendEmail').and.returnValue(Observable.empty());
      component.onSubmit({});
      expect(spyService).toHaveBeenCalled();
    });

    it('should set \'status\' value', () => {
      spyOn(service, 'sendEmail').and.returnValue(Observable.from([{status: 200}]));
      component.onSubmit({});
      expect(component.status).toEqual(200);
    });
  });
});
