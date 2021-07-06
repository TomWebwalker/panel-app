import { Injectable } from '@angular/core';
import {
  ProfileFragment,
  ProfileGQL,
  UpdateProfileGQL,
  UserUpdateInput,
} from '@graphql';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(
    private readonly profileGQL: ProfileGQL,
    private readonly updateProfileGQL: UpdateProfileGQL
  ) {}

  getProfile(): Observable<ProfileFragment> {
    return this.profileGQL.fetch().pipe(
      filter((response) => !!response.data.profile),
      map((response) => response.data.profile)
    );
  }

  updateProfile(
    user: UserUpdateInput
  ): Observable<ProfileFragment | undefined> {
    return this.updateProfileGQL
      .mutate({ user })
      .pipe(map((data) => data.data?.updateProfile));
  }
}
