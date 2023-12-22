import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-cors';

  constructor(private http: HttpClient) {}

  getCandy() {
    const url = 'http://localhost:5000/candy';
    axios.get(url)
      .then(data => console.log(data.data));
  }

  addCandy() {
    const url = 'http://localhost:5000/postcandy';
    const data = {"candy": "sugar"};
    axios.post(url, data)
      .then(data => console.log(data.data));
  }


}
