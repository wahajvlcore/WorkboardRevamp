import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noHyphenBetween'
})
export class NoHyphenBetweenPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return value;
    // Split the string into words
    const words = value.split('-');
    // Capitalize each word
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    // Join the words back together
    return capitalizedWords.join(' ');
  }

}
