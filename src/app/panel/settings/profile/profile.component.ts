import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProfileFragment, ProfileGQL, UserUpdateInput } from '@graphql';
import { ProfileService } from '../../services';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {
  readonly profile$: Observable<ProfileFragment>;

  constructor(
    profileGQL: ProfileGQL,
    private readonly profileService: ProfileService,
    private readonly snackBar: MatSnackBar
  ) {
    this.profile$ = profileService.getProfile();
  }

  ngOnInit(): void {}

  onProfileUpdate(user: UserUpdateInput): void {
    this.profileService.updateProfile(user).subscribe(
      () => this.snackBar.open('Profile updated successfully.'),
      () => this.snackBar.open('Error occurred. Please try again.')
    );
  }
}
