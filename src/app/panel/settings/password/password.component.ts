import { Component, ViewChild } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { UpdatePasswordGQL } from '@graphql';
import { first } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { evenValuesValidator } from '../../../shared/validators/even-values.validator';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss'],
})
export class PasswordComponent {
  @ViewChild('passwordForm', { static: true }) passwordForm: NgForm;

  form = this.formBuilder.group(
    {
      oldPassword: [null, Validators.required],
      newPassword: [null, [Validators.required]],
      newPasswordRe: [null, [Validators.required]],
    },
    { validators: [evenValuesValidator('newPassword', 'newPasswordRe')] }
  );

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly updatePasswordGQL: UpdatePasswordGQL,
    private readonly snackBar: MatSnackBar
  ) {}

  onSubmit(): void {
    if (this.form.invalid) {
      return;
    }
    const { oldPassword, newPassword } = this.form.value;
    this.updatePasswordGQL
      .mutate({ passwords: { oldPassword, newPassword } })
      .pipe(first())
      .subscribe(
        () => this.successResponse(),
        (error) => this.failResponse(error)
      );
  }

  isPasswordsErrorVisible(): boolean {
    return (
      this.form.hasError('notEven') &&
      this.form.get('newPassword')!.touched &&
      this.form.get('newPasswordRe')!.touched
    );
  }

  private successResponse(): void {
    this.snackBar.open('Password updated successfully.');
    this.passwordForm.resetForm();
  }

  private failResponse(error: { message: string }): void {
    if (error.message === 'PASSWORDS_NOT_MATCH') {
      this.form.get('oldPassword')?.setErrors({ notMatch: true });
      this.snackBar.open('Passwords not match');
    }
  }
}
