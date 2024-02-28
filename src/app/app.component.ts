import { Component, Inject, InjectionToken, OnInit } from '@angular/core';
import { ProductService } from './core/services/product.service';
import { NewProduct, Product } from './helpers/interfaces/product.interface';
import { INJECTOR_TITLE } from './core/constants';
import { HttpService } from './core/services/http.service';
import { ajax } from 'rxjs/ajax'
import { concatMap, debounceTime, delay, filter, first, forkJoin, fromEvent, interval, map, of, switchMap, take, tap, toArray } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

}