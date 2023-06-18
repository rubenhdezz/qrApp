import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private previousSource = new BehaviorSubject<string>(undefined as any);
  previousUrl = this.previousSource.asObservable();

  constructor() { }

  setPreviousUrl(url: string){
    this.previousSource.next(url);
  }
}
