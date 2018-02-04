import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {HttpHeaders, HttpClient} from '@angular/common/http';

@Injectable()
export class ContactService {

  constructor(private http: HttpClient) {}

  sendEmail(queryObject: any) {
    const body = JSON.stringify(queryObject);
    return this.http.post('https://keilcarpenter-portfolio-api.herokuapp.com/api/sendemail', body, {observe: 'response'});
  }

  sendEemail(queryObject: any) {
    const body = JSON.stringify(queryObject);
    return this.http.post('https://keilcarpenter-portfolio-api.herokuapp.com/api/sendemail', body, {observe: 'response'});
  }
}
