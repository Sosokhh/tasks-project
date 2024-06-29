import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'dateFormat',
  standalone: true
})
export class DateFormatPipe implements PipeTransform {

  transform(value: any): any {
    const parsedDate = Date.parse(value);
    if (!isNaN(parsedDate)) {
      const formattedDate = new Date(value);
      const datePipe = new DatePipe('en-US');
      return datePipe.transform(formattedDate, 'HH:mm:ss MMM dd yyyy');
    } else {
      return value;
    }
  }

}
