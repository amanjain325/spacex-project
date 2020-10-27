import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Resolve } from '@angular/router';
import { AppService } from './app.service';

@Injectable()
export class AppResolver implements Resolve<any> {
    constructor(private appService: AppService) { }

    resolve() {
        return this.appService.getProductList().toPromise().then((resp: any) => {
            return resp;
        }, (err: any) => {
            return [];
        })
    }
}