import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle
} from '@angular/material/dialog';
import { ConfirmDialogData } from '../models';
import { MatButton } from '@angular/material/button';

const Components = [
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatButton,
  MatDialogClose
]

@Component({
  selector: 'app-confirmable',
  standalone: true,
  templateUrl: './confirmable.component.html',
  styleUrls: ['./confirmable.component.scss'],
  imports: [
    ...Components
  ],
})
export class ConfirmableComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: ConfirmDialogData) {}

}
