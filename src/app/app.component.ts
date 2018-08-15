import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  questions: any;
  answer: any = {
    question1: '',
    question2: '',
    question3: '',
    question4: '',
    question5: '',
  };
  a = 0;
  constructor(private http: HttpClient) {
    this.http.get('assets/mock/question.mock.json').subscribe(
      (data: any) => {
        this.questions = data.questions;
        console.log(this.questions);
      },
      err => {
        console.log(err);
      }
    );
  }
}
