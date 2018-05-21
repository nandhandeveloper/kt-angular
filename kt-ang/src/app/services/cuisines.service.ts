import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CuisinesService {

  constructor(private http: HttpClient) { }

  getAllCuisines() {
    return this.http.get('https://12226dqt16.execute-api.us-east-1.amazonaws.com/dev/api/cuisines');
  }

}
