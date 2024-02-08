import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appOutdate]'
})
export class OutdateDirective implements OnInit {
  @Input('appOutdate') enrollmentDate!: Date

  constructor(private _el: ElementRef, private _renderer: Renderer2  ) { }
  ngOnInit(): void {
    const currentDate = new Date();
    const expTimeInYears = 4;
    const yearsOfEnrollment = currentDate.getFullYear() - this.enrollmentDate.getFullYear();
    // console.log(this._el);
    
    if(yearsOfEnrollment > expTimeInYears) {
      (this._el.nativeElement as HTMLElement).style.opacity = "0.5";
      this._renderer.setStyle(this._el.nativeElement, 'border', '2px solid red')
    }
    
  }


}
