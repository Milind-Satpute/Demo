import { Component, OnInit } from '@angular/core';
import { Login } from '../login';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {}
  uname = new FormControl('');
  password = new FormControl('');
  ngOnInit() {}

  submitText() {
    console.log(this.uname.value);
    console.log(this.password.value);
  }
  redirect() {
    this.router.navigate(['./home', { id: this.uname.value }]);
  }
}
