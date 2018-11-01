import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	username = new FormControl('');
	password = new FormControl('');
  constructor() {
  	this.username.setValue('Hello');
  	this.password.setValue('Paasword');
	}

  ngOnInit() {
  }

  updateUsername(){
  	this.username.setValue('Updated Username');
	}

}
