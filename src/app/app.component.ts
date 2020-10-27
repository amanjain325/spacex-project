import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  products: any[] = [];
  queryParamsSub$: Subscription = new Subscription();
  queryParams: any = {};

  constructor(private appService: AppService, private _activatedRouter: ActivatedRoute) { }

  ngOnInit() {
    // this.getProductLists();
    this.queryParamsSub$Fn();
  }

  getProductLists(options?: any) {
    this.appService.getProductList(options).toPromise().then((resp: any) => {
      this.products = resp;
    }, (err: any) => {
      alert('Something went wrong');
    });
  }


  queryParamsSub$Fn() {
    this.queryParamsSub$ = this._activatedRouter.queryParams.subscribe((queryParams: any) => {
      this.getProductLists(queryParams);
    })
  }

  ngOnDestroy() {
    this.queryParamsSub$.unsubscribe();
  }

  // filterAppliedEve(event: any) {
  //   console.log(event)
  //   this.getProductLists(event);
  // }

}
