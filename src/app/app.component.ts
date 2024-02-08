import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Laptop } from './app.interface';
import { Student } from './demo-examples/interfaces/student.interface';

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
export class AppComponent {
  studentList: Student[] = []
  modifiedData: any
  constructor() {
    this.studentList = [
      {
        firstName: 'James',
        lastName: 'Smith',
        age: 22,
        email: 'jamesSmith@test.com',
        studentId: 2,
        gender: 'male',
        enrollmentDate: new Date('05-15-2015'),
        favSubject: ['Mathematics', 'Physics'],
        isInternational: false,
        phone: '+1 555-1234',
        profileImg: 'https://i.pinimg.com/originals/d6/10/28/d61028b4d6049982c720c788f1bc30ee.png'
      },
      {
        firstName: 'Amanda',
        lastName: 'Johnson',
        age: 23,
        email: 'amandaJohnson@test.com',
        studentId: 3,
        gender: 'female',
        enrollmentDate: new Date('09-22-2013'),
        favSubject: ['Biology', 'Chemistry'],
        isInternational: false,
        phone: '+1 555-5678',
        profileImg: 'https://cdn4.iconfinder.com/data/icons/professions-bzzricon-filled-lines/512/25_Student-512.png'
      },
      {
        firstName: 'Daniel',
        lastName: 'Garcia',
        age: 24,
        email: 'danielGarcia@test.com',
        studentId: 4,
        gender: 'male',
        enrollmentDate: new Date('03-10-2016'),
        favSubject: ['Computer Science', 'Programming'],
        isInternational: true,
        phone: '+44 20 1234 5678',
        profileImg: 'https://cdn-icons-png.flaticon.com/512/3584/3584411.png'
      },
      {
        firstName: 'Sophia',
        lastName: 'Lee',
        age: 21,
        email: 'sophiaLee@test.com',
        studentId: 5,
        gender: 'female',
        enrollmentDate: new Date('11-28-2022'),
        favSubject: ['Literature', 'History'],
        isInternational: false,
        phone: '+1 555-8765',
        profileImg: 'https://cdn0.iconfinder.com/data/icons/education-and-school-flat-1/128/Primary_school_student_study_school_girl_avatar_child-512.png'
      },
      {
        firstName: 'Matthew',
        lastName: 'Brown',
        age: 26,
        email: 'matthewBrown@test.com',
        studentId: 6,
        gender: 'male',
        enrollmentDate: new Date('08-14-2021'),
        favSubject: ['Economics', 'Statistics'],
        isInternational: true,
        phone: '+33 1 2345 6789',
        profileImg: 'https://cdn-icons-png.flaticon.com/512/2784/2784403.png'
      }
    ]
    console.log(this.studentList)
  }
}