import { Component, Input } from '@angular/core';
import { Checklist } from '../../../shared/interfaces/checklist.interface.ts';

@Component({
  selector: 'app-checklist-list',
  standalone: true,
  imports: [],
  templateUrl: './checklist-list.component.html',
  styleUrl: './checklist-list.component.scss'
})
export class ChecklistListComponent {
  @Input({ required: true }) checklists!: Checklist[];
}
