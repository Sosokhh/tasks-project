import { Component, inject, signal, WritableSignal } from '@angular/core';
import { Task2Service } from './services';
import { Data, DATA_INITIAL } from './models';
import { Movie } from './models';
import { CardComponent } from '../../../components/card/card.component';
import { FormsModule } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatTooltip } from '@angular/material/tooltip';
import { MatFormField, MatInput } from '@angular/material/input';
import { MatCardImage, MatCardSubtitle, MatCardTitle } from '@angular/material/card';
import { NgOptimizedImage } from '@angular/common';

const Components = [
  CardComponent, MatIcon,
  MatIconButton,
  MatTooltip,
  MatInput,
  MatFormField,
  MatButton,
  MatCardSubtitle,
  MatCardTitle,
  MatCardImage
]
const Modules = [FormsModule]

@Component({
  selector: 'app-task-2',
  standalone: true,
  imports: [
    ...Components, ...Modules, NgOptimizedImage
  ],
  templateUrl: './task-2.component.html',
  styleUrl: './task-2.component.scss'
})
export class Task2Component  {
  #task2Service = inject(Task2Service);
  searchTerm: string = '';

  tableData: WritableSignal<Data<Movie>> = signal(DATA_INITIAL);

  getMovies() {
    this.#task2Service.getMovies(this.searchTerm).subscribe({
      next: (data) => {
        this.tableData.set(data);
      }
    });
}

}
