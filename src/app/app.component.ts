import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { reduce } from 'rxjs';
enum MenuItems {
  Home = 0,
  Service = 1,
  ContactUs = 2,
  Help = 3,
  Blogs = 4
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  constructor(private elementRef: ElementRef) { }
  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument
      .body.style.backgroundColor = '#ECECEC';
  }
  toggleIndex = 1;
  currentMenu = MenuItems.Home;

  changeToggleIndex(index: number) {
    this.toggleIndex = index;
    console.log(this.toggleIndex);
  }
}
