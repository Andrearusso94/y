import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  apiUrl = 'http://localhost:5000/api/tipologiche/getCuisinesList';
  apiUrlRestaurants =`http://localhost:5000/api/restaurant/getRestaurants/0/10`;

  constructor(private http: HttpClient) { }

  getList() {
    return this.http.get(this.apiUrl);
};

getRest(){
  return this.http.get(this.apiUrlRestaurants);

}

}

