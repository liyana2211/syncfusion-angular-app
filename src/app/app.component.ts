import { Component, ViewChild } from '@angular/core';
import { SidebarComponent } from '@syncfusion/ej2-angular-navigations';
//import { ButtonComponent, RadioButtonComponent } from "@syncfusion/ej2-angular-buttons";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//Docking Sidebar
export class AppComponent {
  @ViewChild('dockBar')
  dockBar!: SidebarComponent;
  public enableDock: boolean = true;
  public width: string = '220px';
  public dockSize: string = '72px';
  toggleClick() {
    this.dockBar.toggle();
  }
}

//  Position Sidebar
/*export class AppComponent {
  @ViewChild('sidebar')
  sidebar!: SidebarComponent;
  public type: string =  'Push';
  public target: string='content';
  public enablePersistence: boolean = true;
  @ViewChild('togglebtn')
  public togglebtn!: ButtonComponent;
  public onCreated(args: any): void {
    this.sidebar.element.style.visibility ='';

btnClick() {
  if(this.togglebtn.element.classList.contains('e-active')) {
    this.togglebtn.content = 'Open';
    this.sidebar.hide();
  } else {
    this.togglebtn.content = 'Close';
    this.sidebar.show();
  }
}
closeClick() {
  this.sidebar.hide();
  this.togglebtn.element.classList.remove('e-active');
  this.togglebtn.content = 'Open'
}
@ViewChild('radio')
public radiobutton: RadioButtonComponent | undefined;
public changeHandler(args: any): void {
  this.sidebar.position = (args.event.target.ej2_instances[0].label == "Left"? "Left" : "Right")
}
}*/
