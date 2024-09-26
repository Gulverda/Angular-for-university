import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [FormsModule, ChildComponent],
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'] // Change 'styleUrl' to 'styleUrls'
})
export class ParentComponent {
  childData: string = "hello from child";
  className: string = "ParentComponent";
  message: string = "hello from parent";

  showMessage() {
    alert(this.message);
  }

  onMessageReceived(message: string):void {
    alert(message);
  }
}
