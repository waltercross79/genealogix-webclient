import { Injectable } from '@angular/core';


/*
Simple service for temporary data storage and sharing between components.
Enables state retention between navigation requests.
*/


@Injectable({
  providedIn: 'root'
})
export class DataService {

  data: { [key: string] : any };
  constructor() { 
    this.data = {};
  }
}
