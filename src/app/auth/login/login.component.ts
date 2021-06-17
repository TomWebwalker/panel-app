import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  form = this.formBuilder.group({
    email: [null, [Validators.required, Validators.email]],
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
    this.authService.login(this.form.value).subscribe(
      (_) => this.onAuthSuccess(),
      ({ error }) => this.onAuthFail(error)
    );
  }

  private onAuthFail(error: any): void {
    if (error.statusCode === 401) {
      this.snackBar.open('Invalid login or password.');
    }
  }

  private onAuthSuccess(): void {
    this.router.navigate(['/panel']);
    this.snackBar.open('Login success');
  }
}
