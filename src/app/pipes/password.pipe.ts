import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password',
})
export class PasswordPipe implements PipeTransform {
  transform(value: string, ban: boolean = true): string {
    return (ban)?'*'.repeat(value.length):value;
  }
}
