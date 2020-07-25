import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor(private http: HttpClient) {

  }

  POST(api, data) {
    return this.http
      .post("/api/" + api, data);
  }

  GET(api) {
    return this.http
      .get("/api/" + api);
  }

  PUT() {

  }

  GET_ONE() {

  }

}
