import { Component, Input } from '@angular/core';
import { ChecklistItem } from '../../../shared/interfaces/checklist-item';

@Component({
  selector: 'app-checklist-item-list',
  standalone: true,
  imports: [],
  templateUrl: './checklist-item-list.component.html',
  styleUrl: './checklist-item-list.component.scss'
})
export class ChecklistItemListComponent {
@Input({ required: true }) checklistItems!: ChecklistItem[];
}
