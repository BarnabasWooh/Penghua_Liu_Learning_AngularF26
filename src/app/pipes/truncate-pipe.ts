import {Pipe, PipeTransform} from '@angular/core';

// Define the custom pipe.
@Pipe({
  name: 'truncate',
})

// Shorten the text to a specified length
export class TruncatePipe implements PipeTransform {
  transform(value: string | null | undefined, limit = 60): string {
    if (!value) return '';
    if (value.length <= limit) return value;
    return value.slice(0, limit) + '...';
  }
}



