import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UserService} from './user.service';

@Injectable()
export class AdvertService {

  constructor(private http: HttpClient) {
  }

  // Uses http.get() to load data from a single API endpoint
  list() {
    return this.http.get('/api/v1/advert/');
  }
}
