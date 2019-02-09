import { Injectable } from '@angular/core';
@Injectable()
export class UserService {
    auth_token;
    user_data;
    constructor() {}

    storeUserData(token, data) {
        localStorage.token = token;
        localStorage.setItem('state', JSON.stringify(data));
        this.auth_token = token;
        this.user_data = data;
      }

      logout() {
          this.auth_token = null;
          this.user_data = null;
          localStorage.clear();
      }
}