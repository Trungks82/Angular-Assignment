import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
//import { DialogData } from 'src/app/components/tab2/tab2.component';
import { Info } from 'src/app/info';
import { Set } from 'src/app/set';

@Component({
  selector: 'app-dialog-data',
  templateUrl: './dialog-data.component.html',
  styleUrls: ['./dialog-data.component.scss']
})
export class DialogDataComponent implements OnInit {
  source:any
  name = '';
  message = '';
  emojIcon = '';
  selectedValue ='';
//   allColors = [
//   {value:'rgba(207, 223, 255, 1)'}, 
//   {value:'rgba(156, 199, 255, 1)'}, 
//   {value:'rgba(45, 127, 249, 1)'}, 
//   {value:'rgba(0, 103, 255, 1)'}, 
//   {value:'rgba(0, 84, 209, 1)'},
//   {value:'rgba(208, 240, 253, 1)'}, 
//   {value:'rgba(119, 209, 243, 1)'}, 
//   {value:'rgba(24, 191, 255, 1)'},
//   {value:'rgba(64, 131, 172, 1)'}, 
//   {value:'rgba(11, 118, 183, 1)'},
//   {value:'rgba(194, 245, 233, 1)'}, 
//   {value:'rgba(114, 221, 195, 1)'}, 
//   {value:'rgba(32, 217, 210, 1)'}, 
//   {value:'rgba(123, 200, 195, 1)'}, 
//   {value:'rgba(6, 160, 155, 1)'},
//   {value:'rgba(255, 179, 200, 1)'}, 
//   {value:'rgba(255, 140, 173, 1)'}, 
//   {value:'rgba(255, 140, 173, 1)'}, 
//   {value:'rgba(255, 0, 73, 1)'}, 
//   {value:'rgba(218, 2, 64, 1)'},
//   {value:'rgba(255, 227, 175, 1)'}, 
//   {value:'rgba(255, 214, 140, 1)'}, 
//   {value:'rgba(255, 197, 92, 1)'}, 
//   {value:'rgba(253, 178, 43, 1)'}, 
//   {value:'rgba(232, 149, 0, 1)'},
//   {value:'rgba(255, 159, 242, 1)'}, 
//   {value:'rgba(254, 103, 233, 1)'}, 
//   {value:'rgba(246, 56, 220, 1)'}, 
//   {value:'rgba(255, 0, 220, 1)'}, 
//   {value:'rgba(214, 0, 184, 1)'},
//   {value:'rgba(255, 181, 152, 1)'}, 
//   {value:'rgba(255, 158, 121, 1)'}, 
//   {value:'rgba(255, 120, 68, 1)'}, 
//   {value:'rgba(255, 71, 0, 1)'}, 
//   {value:'rgba(197, 55, 0, 1)'},
//   {value:'rgba(175, 181, 255, 1)'}, 
//   {value:'rgba(142, 150, 255, 1)'}, 
//   {value:'rgba(107, 118, 255, 1)'}, 
//   {value:'rgba(49, 64, 255, 1)'}, 
//   {value:'rgba(0, 19, 255, 1)'},
//   {value:'rgba(131, 204, 139, 1)'}, 
//   {value:'rgba(97, 199, 108, 1)'}, 
//   {value:'rgba(32, 201, 51, 1)'}, 
//   {value:'rgba(0, 181, 20, 1)'},
//   {value:'rgba(51, 138, 23, 1)'},
//   {value:'rgba(238, 238, 238, 1)'},
//   {value:'rgba(204, 204, 204, 1)'}, 
//   {value:'rgba(172, 172, 172, 1)'}, 
//   {value:'rgba(102, 102, 102, 1)'}, 
//   {value:'rgba(68, 68, 68, 1)'}
// ];
  constructor(public dialogRef: MatDialogRef<DialogDataComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      console.log("data ->",data);
      this.source=data.source
      console.log("source",this.source); 
    }
  ngOnInit() {}

  showEmojiPicker = false;
  sets = Set
  set = Set.twitter;
  toggleEmojiPicker() {
    //console.log('toggleEmojiPicker ->', this.showEmojiPicker);
    this.showEmojiPicker = !this.showEmojiPicker;
  }

  addEmoji(event:any) {
    //console.log('addEmoji ->', event);
    this.emojIcon = event.emoji.native;
    //console.log('emoji-native ->', this.emojIcon);
    //console.log('this.message ->', this.message);
    this.message = this.emojIcon;
    //console.log('message -',this.message);
    
    // this.showEmojiPicker = false;
  }
  onFocus() {
    //console.log('focus');
    this.showEmojiPicker = false;
  }
  onBlur() {
    //console.log('onblur');
  }

  save() {
    let data: Info = {
      name: this.name,
      emoji: this.emojIcon,
    };
    //console.log('onSave() ->', data);
    this.dialogRef.close(data);
  }
}
