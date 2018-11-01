import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent implements OnInit {
	profileEditorForm = new FormGroup({
		firstName : new FormControl(''),
		lastName : new FormControl(''),
		address : new FormGroup({
			street : new FormControl(''),
			city : new FormControl(''),
			state : new FormControl(''),
			zip : new FormControl(''),
		}),
	});

  constructor() {

	}

	onSubmit(){
  	console.log(this.profileEditorForm.value);
	}

	updateProfile(){
  	this.profileEditorForm.patchValue({
			firstName : 'OmPrakash',
			lastName : 'kuswaha',
			address : {
				street : '123 Halsted',
				city : 'farmington Hills',
				state : 'MI',
				zip : '48335'
			},
		});
	}


  ngOnInit() {
  }

}
