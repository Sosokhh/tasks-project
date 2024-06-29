import { Injectable, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ConfirmDialogData } from '../models';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  private static instance: DialogService | null = null;
  private matDialog = inject(MatDialog);

  constructor() {
    DialogService.instance = this;
  }

  public static getInstance(): DialogService | null {
    return DialogService.instance;
  }

  openDialog<T>(data: ConfirmDialogData, component: any): Observable<boolean> {
    return this.matDialog.open(component, {
      data: data,
      maxWidth: '500px',
      disableClose: true,
    }).afterClosed();
  }
}
