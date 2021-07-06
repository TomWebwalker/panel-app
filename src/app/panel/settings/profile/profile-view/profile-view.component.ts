import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProfileFragment, UserUpdateInput } from '@graphql';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.scss'],
})
export class ProfileViewComponent implements OnInit {
  @Input() profile: ProfileFragment;
  @Output() profileUpdate = new EventEmitter<UserUpdateInput>();

  form = this.formBuilder.group({
    name: [null],
    imageUrl: [null],
  });

  constructor(private readonly formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form.patchValue(this.profile);
  }

  onSubmit(): void {
    if (this.form.invalid) {
      return;
    }
    this.profileUpdate.emit(this.form.value);
  }
}
