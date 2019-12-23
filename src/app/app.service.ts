import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class AppService {

  constructor(
    private http: HttpClient
  ) { }
  getChartData(userName) {
    return this.http.get(`https://github-contributions-api.now.sh/v1/${userName}`);
  }

}