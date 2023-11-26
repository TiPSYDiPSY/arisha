import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'dialog-message',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dialog-message.component.html',
  styleUrl: './dialog-message.component.scss'
})
export class DialogMessageComponent {
  @ViewChild('dialogRef') dialogRef: any;

  openDialog() {
    if (this.dialogRef && this.dialogRef.nativeElement) {
      this.dialogRef.nativeElement.showModal();
    }
  }

  closeDialog() {
    if (this.dialogRef && this.dialogRef.nativeElement) {
      this.dialogRef.nativeElement.close();
    }
  }
}