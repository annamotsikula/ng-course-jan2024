import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Student } from '../interfaces/student.interface';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.scss'],
  providers: [ProductService]
})
export class StudentCardComponent implements OnChanges{
  @Input({required: true}) student!: Student
  additionalContactNumber: string = ""
  extraEmail: string = ""
  @Output() sendDetails: EventEmitter<{extraEmail: string; extraPhone: string}> = new EventEmitter<{extraEmail: string; extraPhone: string}>()

  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes)
  }

  inActiveStudent() {
    const currentDate = new Date();
    const expirationDate = 5;
    return (currentDate.getFullYear() - this.student.enrollmentDate.getFullYear()) > expirationDate
  }



  constructor() {
    this.student = {
      firstName: 'John',
      lastName: 'Doe',
      age: 22,
      email: 'johndoe@test.com',
      studentId: 0,
      gender: '',
      enrollmentDate: new Date('07-03-2017'),
      favSubject: [],
      isInternational: false,
      phone: '',
      profileImg: 'https://cdn3d.iconscout.com/3d/premium/thumb/graduate-student-avatar-10107492-8179543.png?f=webp'
    }


  }
  addEmail() {
    this.student.extraEmail = this.extraEmail

  }
  edit() {
    this.sendDetails.emit({extraEmail: this.extraEmail, extraPhone: this.additionalContactNumber});
  }

}
