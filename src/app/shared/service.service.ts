import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  //varibili url api
  apiUrl = 'http://localhost:5000/api/tipologiche/getCuisinesList';
  apiUrlRestaurants = `http://localhost:5000/api/restaurant/getRestaurants/0/12`;

  constructor(private http: HttpClient) { }
  //funzione per la lista delle cucine
  getList() {
    return this.http.get(this.apiUrl);
  };
  //funzione per la lista dei ristoranti
  getRest() {
    return this.http.get(this.apiUrlRestaurants);

  }

}

