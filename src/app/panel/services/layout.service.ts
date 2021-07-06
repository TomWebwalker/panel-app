import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  title$ = new BehaviorSubject<string>('Dashboard');

  constructor(private readonly titleService: Title) {}

  setTitle(title: string): void {
    this.title$.next(title);
    this.titleService.setTitle(`Panel App - ${title}`);
  }
}
