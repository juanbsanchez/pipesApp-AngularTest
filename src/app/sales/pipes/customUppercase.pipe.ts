import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'customUppercase'
})
export class CustomUppercasePipe implements PipeTransform{


  transform(value: string, toUppercase: boolean = true): string {

    return toUppercase ? value.toUpperCase() : value.toLowerCase();

  }



}
