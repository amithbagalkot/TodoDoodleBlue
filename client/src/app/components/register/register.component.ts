import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ValidateService } from '../../services/validate.service';
import { RequestSender } from '../../services/request-sender.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name: String;
  email: String;
  username:String;
  password: String;

  constructor(private validate : ValidateService, private router: Router, 
     private toaster: ToastrService, private requestSender: RequestSender) { }

  ngOnInit() {
  }

  register() {
    const user = {
      name: this.name,
      email: this.email,
      username: this.username,
      password: this.password
    }

    if(!this.validate.validateUser(user)){
      this.toaster.error('please fill all fiels');
      return false;
    }

    else {
      this.requestSender.registerUser(user).subscribe((res)=>{
        console.log();
        if(res.meta.statusCode == 200) {
          this.toaster.success("Registered successfully! can Login");
          this.router.navigate(['/login']);
        }
       
      });
    }
  }
}
