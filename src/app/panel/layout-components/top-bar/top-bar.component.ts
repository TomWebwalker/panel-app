import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileFragment } from '@graphql';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent implements OnInit {
  @Output() sidebarToggle = new EventEmitter<void>();
  profile$: Observable<ProfileFragment>;

  constructor(private readonly activatedRoute: ActivatedRoute) {
    this.profile$ = activatedRoute.data.pipe(map((data) => data.profile));
  }

  ngOnInit(): void {}

  onSidebarToggle(): void {
    this.sidebarToggle.emit();
  }
}
