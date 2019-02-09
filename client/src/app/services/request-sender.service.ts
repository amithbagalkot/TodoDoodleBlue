import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiConfig } from '../config';

interface RequestObj {
    path: string;
    method: string;
    body?: object;
    headers?: any
  }
@Injectable()
export class RequestSender {
    
    constructor(private http: HttpClient){}

    registerUser(userObj){
        const requestObj = {
          method: "POST",
          path: ApiConfig.REGISTER_USER,
          body: userObj,
        }
    
        return this.send(requestObj);
      }
      login(userObj) {
        const requestObj = {
            method: "POST",
            path: ApiConfig.LOGIN,
            body: userObj,
          }
          return this.send(requestObj);
      }
      

      send(requestObj: RequestObj): Observable<any> {
        if (!requestObj.headers) {
          requestObj.headers = {}
        }
        if (requestObj.headers['Content-Type']) {
          requestObj.headers['Content_Type'] = 'application/json';
        }
        if (localStorage.token) {
          requestObj.headers['Authorization'] = `Bearer ${localStorage.token}`;
        }
        var url = `${ApiConfig.HOST}/${requestObj.path}`;
        console.log(ApiConfig.HOST);
        console.log(url);
        switch (requestObj.method) {
          case 'GET':
            return this.http.get(url, { headers: requestObj.headers });
          case 'POST':
            return this.http.post(url, requestObj.body, { headers: requestObj.headers });
          case 'PUT':
            return this.http.put(url, requestObj.body, { headers: requestObj.headers });
        }
      }
}