import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private userService: UserService, private router: Router) {
    this.loginForm = new FormGroup ({
    email: new FormControl(),
    password: new FormControl()
  })}

  ngOnInit(): void {}

  onSubmit() {
    this.userService.login(this.loginForm.value)
    .then(response => {
      console.log(response);
      this.router.navigate(['cards']);
    })
    .catch(error => console.log(error));
  }

  onClick(){
    this.userService.loginWithGoogle()
    .then(response => {
      console.log(response);
      this.router.navigate(['cards']);
    })
    .catch(error => console.log(error))
  }

}