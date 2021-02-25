import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
@Pipe({
  name: 'domSecure'
})
export class DomSecurePipe implements PipeTransform {
  constructor(private DOMS:DomSanitizer){}
  transform(value: string, ...args: unknown[]): SafeResourceUrl {
    return this.DOMS.bypassSecurityTrustResourceUrl(value);
  }

}
