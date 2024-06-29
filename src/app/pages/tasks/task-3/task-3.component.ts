import { Component } from '@angular/core';
import { DateFormatPipe } from './pipes';

@Component({
  selector: 'app-task-3',
  standalone: true,
  imports: [
    DateFormatPipe
  ],
  templateUrl: './task-3.component.html',
  styleUrl: './task-3.component.scss'
})
export class Task3Component {

}
