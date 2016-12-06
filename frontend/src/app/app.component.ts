import { Component, ViewContainerRef } from '@angular/core';
import { ComponentsHelper } from 'ng2-bootstrap/ng2-bootstrap'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public isCollapsed: boolean = true;
  //workaround for ng2-bootstrap modals
  public constructor(componentsHelper:ComponentsHelper, vcr:ViewContainerRef) {
    componentsHelper.setRootViewContainerRef(vcr);
  }
}
