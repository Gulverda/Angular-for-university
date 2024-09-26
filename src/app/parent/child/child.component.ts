import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() parentData: string = "";
  @Output() sendMessage = new EventEmitter<string>();

  notifyParent():void{
    this.sendMessage.emit("Hello from child");
}
}

