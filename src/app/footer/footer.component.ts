import {Component, OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @ViewChild('f') signupForm: NgForm;
  defaultQuestion = 'pet';
  answer = '';

  suggestUsername() {
    const suggestedName = 'Superuser';
  }

  onSubmit(form: NgForm) {
    console.log(this.signupForm);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
