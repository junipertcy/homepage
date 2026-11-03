import { Pipe, PipeTransform } from '@angular/core';
import { LinkKey, linkHref } from '../links/links';

@Pipe({
  name: 'str2IntRes',
  standalone: true
})
export class InternalUriResolverPipe implements PipeTransform {

  // The keys and their paths live in src/app/links/links.ts.
  transform(key: LinkKey): string | undefined {
    return linkHref(key);
  }


}
