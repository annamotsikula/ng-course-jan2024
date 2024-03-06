import { Component, Inject, InjectionToken, OnInit, computed, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {


  // counter = signal(0)

  // product = signal({
  //   name: 'Product 1',
  //   id: 1
  // },
  //   { equal: (prev, next) => prev.name === next.name && prev.id === next.id })

  // name = computed(() => {
  //   console.log('Updating Object')
  //   return this.product().name
  // })

  // constructor() {}

  // update() {
  //   this.product.set({
  //     id: 1,
  //     name: 'Product 1'
  //   });
  // }

}