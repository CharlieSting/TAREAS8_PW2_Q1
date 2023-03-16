import { Component } from '@angular/core';
import { JsonplaceholderService } from './jsonplaceholder.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 title = 'app';

  constructor(public jsonplaceholderService: JsonplaceholderService ) { }
}
