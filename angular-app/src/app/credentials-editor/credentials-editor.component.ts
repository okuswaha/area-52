import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-credentials-editor',
  templateUrl: './credentials-editor.component.html',
  styleUrls: ['./credentials-editor.component.css']
})
export class CredentialsEditorComponent implements OnInit {
	credentialsForm = new FormGroup({
		username : new FormControl(''),
		password : new FormControl(''),
	});

	onSubmit(){
		console.log("entered on submit");
		console.log(this.credentialsForm.value);
	}
  constructor() { }

  ngOnInit() {
  }

}
