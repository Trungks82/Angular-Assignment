import { Component, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogDataComponent } from 'src/app/shared-component/dialog-data/dialog-data.component';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.component.html',
  styleUrls: ['./tab3.component.scss']
})
export class Tab3Component implements OnInit {
  arr2:any = []
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
      data:{source:'tab3'}
    });

    dialogRef.afterClosed().subscribe(result => {
      //console.log(`Dialog result: ${result}`);
      console.log('Dialog result ->', result);
      this.arr2.push(result);
      console.log('new arr ->', this.arr2);
    });
  }

}
