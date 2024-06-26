import { Component, OnInit } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbScrollSpy } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent{
 title = 'myContainer';
   showNavBar: boolean = true;
  activeLink: string = 'home'; // Initially set active link to 'home'

  setActiveLink(link: string) {
    this.activeLink = link;
  }
}
