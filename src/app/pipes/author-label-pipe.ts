import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'authorLabel',
})
export class AuthorLabelPipe implements PipeTransform {
  // Add a label before the author's name
  transform(author: string | null | undefined): string{
    if(!author) return 'Author unknown';
    return 'Author: ' + author;
  }
}
