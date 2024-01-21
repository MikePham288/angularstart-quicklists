import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Checklist } from '../../../shared/interfaces/checklist.interface.ts';

@Component({
  selector: 'app-checklist-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './checklist-header.component.html',
  styleUrl: './checklist-header.component.scss'
})
export class ChecklistHeaderComponent {
  @Input({ required: true }) checklist!: Checklist;
  @Output() addItem = new EventEmitter<void>();
}
