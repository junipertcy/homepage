import { Pipe, PipeTransform } from '@angular/core';
import { LINKS, LinkKey } from '../links/links';

@Pipe({
  name: 'str2url',
  standalone: true
})
export class Str2urlPipe implements PipeTransform {

  // The keys and their URLs live in src/app/links/links.ts.
  transform(key: LinkKey): string | undefined {
    return LINKS[key]?.url;
  }


}
