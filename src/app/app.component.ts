import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Laptop, Student } from './app.interface';

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
export class AppComponent  {
  initialStudent: Student
  modifiedData: any
  constructor() {
     this.initialStudent =  {
      firstName: 'Eleanor',
      lastName: 'Poe',
      age: 25,
      email: 'eleanorPoe@test.com',
      studentId: 1,
      gender: 'female',
      enrollmentDate: new Date('07-03-2014'),
      favSubject: [],
      isInternational: true,
      phone: '',
      profileImg: 'https://i.imgur.com/wvxPV9S.png'

    }

  }

  receiveData(data: {extraEmail: string; extraPhone: string}) {
    this.modifiedData = data
    const { extraEmail, extraPhone } = data
    this.initialStudent.phone = extraPhone
    this.initialStudent.extraEmail = extraEmail
  }
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

}