import { Component, OnInit } from '@angular/core';
import { ValidateService } from "../../services/validate.service";
import { RequestSender } from '../../services/request-sender.service';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../services/user_service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:String;
  password: String;
  constructor( private userService : UserService, private requestSender: RequestSender, private toaster: ToastrService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    const user = {
      username: this.username,
      password: this.password
    }

    this.requestSender.login(user).subscribe((res)=>{
      
      if(res.meta.statusCode === 200) {
        this.toaster.success('successfully Logged In!');
        this.userService.storeUserData(res.meta.token,res.meta.data);
       
        this.router.navigate(['/dashboard']);
      }
    }, (err)=> {
      this.toaster.error(err.error.meta.message.message)
    });
  }
}
