import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

interface ResponseError {
  field: string;
  message: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  form = this.formBuilder.group({
    name: [null, Validators.required],
    email: [null, [Validators.required, Validators.email]],
    terms: [null, Validators.required],
    password: [null, Validators.required],
  });

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly authService: AuthService,
    private readonly snackBar: MatSnackBar,
    private readonly router: Router
  ) {}

  onSubmit(): void {
    if (this.form.invalid) {
      return;
    }
    const { terms, ...registerData } = this.form.value;
    this.authService.register(registerData).subscribe(
      () => this.registerSuccess(),
      ({ error }) => this.registerFail(error)
    );
  }

  getErrorByFieldName(name: string): string {
    const field = this.form.get(name)!;
    if (field.hasError('required')) {
      return 'Field required';
    }
    if (field.hasError('email')) {
      return 'Invalid email address';
    }
    if (field.hasError('unique_violation')) {
      return 'Value already exists';
    }

    return '';
  }

  private registerSuccess(): void {
    this.snackBar.open('Account created successfully!');
    this.router.navigate(['auth', 'login']);
  }

  private registerFail({ field, message }: ResponseError): void {
    this.form.get(field)?.setErrors({ [message]: true });
  }
}
