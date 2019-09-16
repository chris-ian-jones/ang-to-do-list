import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo List';
  days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday']
  dates = [
    {day: 'monday', date: '1st January', weather: 'sunny'},
    {day: 'tuesday', date: '2nd January', weather: 'rainy'},
    {day: 'wedsday', date: '3rd January', weather: 'cloudy'},
    {day: 'thursday', date: '4th January', weather: 'thundery'},
    {day: 'friday', date: '5th January', weather: 'lightningy'},
    {day: 'saturday', date: '6th January', weather: 'snowy'},
    {day: 'sunday', date: '7th January', weather: 'windy'},
  ]
}
