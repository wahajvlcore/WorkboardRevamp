import { Component } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent {
  tooltipText: string = "Copy to clipboard";
  // @ViewChild('contentToCopy')
  // contentToCopy!: ElementRef;

  // copiedContent: string | undefined;

  // constructor() {}

  // copyToClipboard() {
  //   const content = this.contentToCopy.nativeElement.innerText;
  //   this.copiedContent = content;
  // }

  openMyMenu(menuTrigger: MatMenuTrigger) {
    menuTrigger.openMenu();
} 
closeMyMenu(menuTrigger: MatMenuTrigger) {
  menuTrigger.closeMenu();
} 
  changeTooltipText() {
    
      this.tooltipText = "Copied!";

    setTimeout(() => {
      this.tooltipText = "Copy to clipboard";
  },1000);
}
  value =`<button class="button">Enabled</button>`;

  
}
