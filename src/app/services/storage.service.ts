import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  getData(key: string): any {
    // return JSON.parse(localStorage.getItem(key));

    const itemList = localStorage.getItem(key);
    return itemList ? JSON.parse(itemList) : null;
  }

  setData(key: string, data: any) {
    localStorage.setItem(key, JSON.stringify(data));
  }
}
