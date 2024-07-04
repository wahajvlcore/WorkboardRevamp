import { Component } from '@angular/core';

@Component({
  selector: 'app-design-system',
  templateUrl: './design-system.component.html',
  styleUrls: ['./design-system.component.scss']
})
export class DesignSystemComponent {
  componentNames: string[] = ['color-palette','buttons', 'pills','font-sizes','grid-system'];
}
