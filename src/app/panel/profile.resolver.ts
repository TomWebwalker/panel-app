import { Injectable } from '@angular/core';
import { Resolve, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { ProfileFragment } from '@graphql';
import { catchError } from 'rxjs/operators';
import { ProfileService } from './services';

@Injectable({
  providedIn: 'root',
})
export class ProfileResolver implements Resolve<ProfileFragment | null> {
  constructor(
    private readonly profileService: ProfileService,
    private readonly router: Router
  ) {}

  resolve(): Observable<ProfileFragment | null> {
    return this.profileService.getProfile().pipe(
      catchError((_) => {
        this.router.navigate(['/auth/login']);
        return of(null);
      })
    );
  }
}
