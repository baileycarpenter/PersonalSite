import {Component} from '@angular/core';
import {FormGroup, FormBuilder, Validators, Form} from '@angular/forms';
import {ValidationService} from './validation.service';
import {ContactService} from './contact.service';
import {HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {Error} from 'tslint/lib/error';
import {Router} from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  formIsProcessing: boolean;
  messageWasSent: number;
  contactForm: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder, private validationService: ValidationService, private contactService: ContactService) {
    this.createForm();
  }

  onReset(){
    this.router.navigate(['../']);
  }

  createForm(){
    this.messageWasSent = null;
    this.formIsProcessing = false;
    this.contactForm = this.formBuilder.group({
      'name': ['', Validators.compose([
        Validators.required,
        this.validationService.namevalidator
      ])],
      'email': ['', Validators.compose([
        Validators.required,
        this.validationService.emailValidator
      ])],
      'message': ['', Validators.compose([
        Validators.required,
      ])],
    });
  }

  onSubmit(form: Form) {
    this.formIsProcessing = true;
    this.contactService.sendEmail(form).subscribe(
      (data: HttpResponse<boolean>) => {this.handleResponse(data)},
      (err: HttpErrorResponse) => {this.handleError(err)}
    );
  }

  handleError(err: HttpErrorResponse){
    if (err.error instanceof Error){
      // A client-side or network error occurred. Handle it accordingly.
      console.log('An error occurred: ', err.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.log('Backend returned code: ', err.message, 'body was: ', err.error)
    }
  }

  handleResponse(data){
    this.messageWasSent = data.status;
  }
}
