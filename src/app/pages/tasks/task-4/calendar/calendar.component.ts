import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatCalendar } from '@angular/material/datepicker';
import { MatToolbar } from '@angular/material/toolbar';
import { provideNativeDateAdapter } from '@angular/material/core';
import moment from 'moment';
import { NgClass, NgForOf } from '@angular/common';
import { CalendarDay } from '../models';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [
    MatCalendar,
    MatToolbar,
    NgClass,
    NgForOf
  ],
  providers: [
    provideNativeDateAdapter(),
  ],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalendarComponent {
  currentMonth: string;
  calendarDays: CalendarDay[] = [];
  weekdays: string[] = [];

  constructor() {
    const currentDate = moment();
    this.currentMonth = currentDate.format('MMMM YYYY');
    this.generateCalendar(currentDate);
    this.generateWeekdays();

  }

  generateWeekdays() {
    this.weekdays = moment.weekdaysShort(true);
  }

  generateCalendar(currentDate: moment.Moment) {
    const startOfMonth = currentDate.clone().startOf('month');
    const endOfMonth = currentDate.clone().endOf('month');
    const startDate = startOfMonth.clone().startOf('week');
    const endDate = endOfMonth.clone().endOf('week');

    let day = startDate.clone();
    while (day.isBefore(endDate)) {
      this.calendarDays.push({
        day: day.date(),
        date: day.format('YYYY-MM-DD'),
        isToday: day.isSame(moment(), 'day'),
        isWeekend: day.day() === 0 || day.day() === 6,
        isCurrentMonth: day.month() === currentDate.month()
      });
      day.add(1, 'day');
    }
  }
}
