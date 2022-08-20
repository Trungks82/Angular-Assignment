import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogDataComponent } from './dialog-data.component';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [DialogDataComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    MatIconModule,
    PickerModule,
    MatSelectModule
  ],
   entryComponents: [ DialogDataComponent],
})
export class DialogDataModule { }
