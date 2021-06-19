import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'customUppercase'
})
export class CustomUppercasePipe implements PipeTransform{

  transform(arg: string): string {
    return 'HELLO WORLD';
  }

}
