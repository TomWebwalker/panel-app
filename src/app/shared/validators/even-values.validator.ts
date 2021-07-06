import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function evenValuesValidator(
  fieldName: string,
  compareName: string
): ValidatorFn {
  return (group: AbstractControl): ValidationErrors | null => {
    const firstField = group.get(fieldName)!;
    const secondField = group.get(compareName)!;
    const errorMsg = { notEven: true };
    if (firstField.value === secondField.value) {
      return null;
    } else {
      return errorMsg;
    }
  };
}
