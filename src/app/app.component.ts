import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Laptop } from './app.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // template: `<h2>Angular app<h2>`,
  // styles: [`
  // h2 {
  //   color: red
  // }`]
})
export class AppComponent implements OnInit {
  title: string;
  today: Date = new Date();
  version: number = 1;
  myNewLaptop: Laptop

  constructor() {
    this.title = `My First Angular App, and its version: ${this.version}`;
    this.myNewLaptop = {
      brand: 'Lenovo',
      year: 2020,
      hasFrontCamera: true,
      keyboardType: 'long'
    }
    console.log(this.myNewLaptop)
  }
  ngOnInit() {
    this.version = 3
    console.log('App Initialized')
  }
  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log(changes)
  // }
  // ngDoCheck(): void {
  //   console.log('Do Check')
  // }
  // ngAfterContentChecked(): void {
  //   console.log('After Content Checked')
  // }
  // ngAfterContentInit(): void {
  //   console.log('After Content Init')
  // }
  // ngAfterViewChecked(): void {
  //   console.log('After View Checked')
  // }
  // ngAfterViewInit(): void {
  //   console.log('After View Init')
  // }
  // ngOnDestroy(): void {
  //   console.log('On Destroy')
  // }
  increment(ev: Event) {
    const target = ev.target as HTMLButtonElement
    console.log(target)
  }
}