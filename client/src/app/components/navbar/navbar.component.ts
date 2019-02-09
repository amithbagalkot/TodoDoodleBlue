import { Component, OnInit } from '@angular/core';
import { RequestSender } from '../../services/request-sender.service';
import { UserService } from '../../services/user_service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user;
  constructor(private userService: UserService, private router: Router, private requestSender: RequestSender) { 
    this.user = JSON.parse(localStorage.getItem('state'));
    console.log(this.user);
  }

  ngOnInit() {
  }
  onLogout() {
    this.userService.logout();
    this.router.navigate(['/login']);
  }

}
