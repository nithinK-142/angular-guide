import { Pipe, PipeTransform } from '@angular/core';
import { constants } from '../constants/constants';

@Pipe({
  name: 'validationMessage',
  standalone: true,
})
export class ValidationMessagePipe implements PipeTransform {
  transform(error: string): string {
    switch (error) {
      case 'required':
        return constants.VALIDATION_MESSAGE.REQUIRED;
      case 'minlength':
        return constants.VALIDATION_MESSAGE.MIN_LENGTH;
      case 'maxlength':
        return constants.VALIDATION_MESSAGE.MAX_LENGTH;
      default:
        return '';
    }
  }
}
