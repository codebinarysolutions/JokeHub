import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent {
    message: string = 'Hello, Angular! 🎉';
    message2 : string = 'This is my added message !!';
    changeMessage()
    {
      this.message = 'You clicked the button !🚀';
    }
  
    joke : string = 'Click to Joke';
    changeMessage2()
    {
      this.joke = 'You clicked the button  2 !🚀';
    }
    constructor(private http: HttpClient) {}

   fetchJoke() {
      this.http.get<any>('https://official-joke-api.appspot.com/random_joke')
        .subscribe(response => {
          this.joke = `${response.setup} - ${response.punchline}`;
        });
   }
}
