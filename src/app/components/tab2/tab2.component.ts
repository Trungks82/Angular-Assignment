import { Component, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogDataComponent } from 'src/app/shared-component/dialog-data/dialog-data.component';

// export interface DialogData {
//   animal: 'panda' | 'unicorn' | 'lion';
// }
@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.component.html',
  styleUrls: ['./tab2.component.scss']
})
export class Tab2Component implements OnInit {
  arr: any = [];

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(){
    // this.dialog.open(DialogDataComponent, {
    //   data: {
    //     animal: 'panda',
    //   },
    // });
    const dialogRef = this.dialog.open(DialogDataComponent,{
      width: '580px',
      height: '520px',
      data:{source:'tab2'}
    });

    dialogRef.afterClosed().subscribe(result => {
      //console.log(`Dialog result: ${result}`);
      console.log('Dialog result ->', result);
      this.arr.push(result);
      console.log('new arr ->', this.arr);
    });
  }
}
