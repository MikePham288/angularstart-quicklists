import { Component, ContentChild, Input, TemplateRef, inject } from '@angular/core';
import { Dialog, DialogModule } from '@angular/cdk/dialog';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [DialogModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  dialog = inject(Dialog);

  @Input() set isOpen(value: boolean) {
    if (value) {
      this.dialog.open(this.template, { panelClass: 'dialog-container' });
    } else {
      this.dialog.closeAll();
    }
  }

  @ContentChild(TemplateRef, { static: false }) template!: TemplateRef<any>;
}
