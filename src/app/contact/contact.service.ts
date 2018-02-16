import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {HttpHeaders, HttpClient} from '@angular/common/http';

@Injectable()
export class ContactService {
  readonly API_ROOT_URL = 'https://keilcarpenter-portfolio-api.herokuapp.com/api';

  constructor(private http: HttpClient) {}

  sendEmail(queryObject: any) {
    const body = JSON.stringify(queryObject);
    const headers = new HttpHeaders({'Content-Type' : 'application/json'});
    return this.http.post(`${this.API_ROOT_URL}/sendemail`, body, {headers: headers, observe: 'response'});
  }
}
