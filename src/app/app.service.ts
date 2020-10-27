import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppService {
    constructor(private http: HttpClient) { }

    getProductList(options?: any) {
        // console.log(options);
        let url = "https://api.spacexdata.com/v3/launches?limit=100";
        if (options) {
            url += "&" + Object.keys(options).map(k => `${k}=${options[k]}`).join('&');
        }
        return this.http.get(url);
    }
}