import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { ProfileFragment, ProfileGQL } from '@graphql';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProfileResolver implements Resolve<ProfileFragment> {
  constructor(private readonly profileGQL: ProfileGQL) {}

  resolve(): Observable<ProfileFragment> {
    return this.profileGQL
      .fetch()
      .pipe(map((response) => response.data.profile));
  }
}
