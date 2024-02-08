import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, limit: number): string {
    const words = value.split(/\s+/);

    if(words.length > limit) {
      if(limit > 0) {
        return words.slice(0, limit).join(' ') + '...'
      } else {
        const positiveLimitNumber = (limit * -1);
        return words.slice(words.length - positiveLimitNumber).join(" ")
      }
    }

    return value;
  }

}
