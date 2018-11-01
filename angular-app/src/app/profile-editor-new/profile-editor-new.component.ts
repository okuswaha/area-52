import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-profile-editor-new',
  templateUrl: './profile-editor-new.component.html',
  styleUrls: ['./profile-editor-new.component.css']
})
export class ProfileEditorNewComponent implements OnInit {
	profileEditorForm = this.fb.group({
		firstName: [''],
		lastName: [''],
		address: this.fb.group({
			street: [''],
			city: [''],
			state: [''],
			zip: ['']
		}),
	});

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
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
		});}

		clearProfile() {
			this.profileEditorForm.patchValue({
				firstName : '',
				lastName : '',
				address : {
					street : '',
					city : '',
					state : '',
					zip : '',}
				}, );


	}

}
