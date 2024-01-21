import { Component } from '@angular/core';
import { ModalComponent } from '../shared/ui/modal/modal.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ModalComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export default class HomeComponent {

}