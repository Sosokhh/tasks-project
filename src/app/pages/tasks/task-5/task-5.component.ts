import { Component } from '@angular/core';
import { MatFormField, MatInput } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatTooltip } from '@angular/material/tooltip';
import { calculateSimilarityFn } from './utils';
import { Similarity } from './models';

@Component({
  selector: 'app-task-5',
  standalone: true,
  imports: [
    MatInput,
    FormsModule,
    MatFormField,
    MatIcon,
    MatIconButton,
    MatTooltip,
    MatButton
  ],
  templateUrl: './task-5.component.html',
  styleUrl: './task-5.component.scss'
})
export class Task5Component {
  wordArray: string[] = [];
  arrSimilarity: Similarity[] = [];

  constructor() {
  }

  pushToArray(value: string) {
    this.wordArray.push(value);
  }

  calculate(text: string, words: string[]){
      words.map(word => {
        const sim = calculateSimilarityFn(text, word);
        this.arrSimilarity.push({
          word: word,
          percentage: sim,
        });
      })
  }

}
