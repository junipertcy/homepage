import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'str2IntRes',
  standalone: true
})
export class InternalUriResolverPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): string | undefined {
    switch (value) {
      // Teaching
      case '5352_s24_syllabus':
        return 'assets/pdf/teaching/5352/csci5352_s24_syllabus.pdf';
      case '5352_wk1':
        return 'assets/pdf/teaching/5352/csci5352_S24_L1b_scribbles.pdf';
      case '5352_wk2':
        return 'assets/pdf/teaching/5352/csci5352_S24_L2_scribbles.pdf';
      case '5352_wk3':
        return 'assets/pdf/teaching/5352/csci5352_S24_L3_scribbles.pdf';
      case '5352_wk4':
        return 'assets/pdf/teaching/5352/csci5352_S24_L4_scribbles.pdf';
      case '5352_wk5':
        return 'assets/pdf/teaching/5352/csci5352_S24_L5_scribbles.pdf';
      case '5352_wk6':
        return 'assets/pdf/teaching/5352/csci5352_S24_L6_scribbles.pdf';
      case '5352_wk7':
        return 'assets/pdf/teaching/5352/csci5352_S24_L7_scribbles.pdf';
      case '5352_wk8':
        return 'assets/pdf/teaching/5352/csci5352_S24_L8_scribbles.pdf';
      case '5352_wk9':
        return 'assets/pdf/teaching/5352/csci5352_S24_L9_scribbles.pdf';
      case '5352_wk10':
        return 'assets/pdf/teaching/5352/csci5352_S24_L10_scribbles.pdf';
      case '5352_wk12':
        return 'assets/pdf/teaching/5352/csci5352_S24_L11a_scribbles.pdf';
      case '5352_wk13':
        return 'assets/pdf/teaching/5352/csci5352_S24_L12_scribbles.pdf';
      case '5352_wk14':
        return 'assets/pdf/teaching/5352/csci5352_S24_L13_scribbles.pdf';
    }
    return undefined;
  }


}
