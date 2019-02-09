import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ApiConfig } from '../config';

interface RequestObj {
    path: string;
    method: string;
    body?: object;
    headers?: any
  }
@Injectable()
export class TaskService {
    
    constructor(private http: HttpClient){}

      addTask(userObj) {
        const requestObj = {
            method: "POST",
            path: ApiConfig.ADD_TASK,
            body: userObj,
          }
          return this.send(requestObj);
      }
      getTask(){
        const requestObj = {
          method: "GET",
          path: ApiConfig.GET_TASK
        }
        return this.send(requestObj);
      }
      deleteTask(id){
        const requestObj = {
          method: "DELETE",
          path: `${ApiConfig.DELETE_TASK}/${id}` 
        }
        return this.send(requestObj);
      }
      updateTask(task, id){
        console.log(task);
        const requestObj = {
          
          method: "PUT",
          path: `${ApiConfig.UPDATE_TASK}/${id}`,
          body: task 
        }
        return this.send(requestObj);
      }
      getRecoverTask() {
        const requestObj = {
          method: "GET",
          path: ApiConfig.GET_RECOVER_TASK
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
        var url = `${requestObj.path}`;
        switch (requestObj.method) {
          case 'GET':
            return this.http.get(url, { headers: requestObj.headers });
          case 'POST':
            return this.http.post(url, requestObj.body, { headers: requestObj.headers });
          case 'PUT':
            return this.http.put(url, requestObj.body, { headers: requestObj.headers });
          case 'DELETE': 
            return this.http.delete(url,{ headers: requestObj.headers } )
        }
      }
}