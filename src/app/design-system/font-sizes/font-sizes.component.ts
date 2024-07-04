import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface FontSizeData {
  name: string;
  sizepx: number;
  sizerem: number;
  lineheight: number;
  useOfVariable: string;
}

@Component({
  selector: 'app-font-sizes',
  templateUrl: './font-sizes.component.html',
  styleUrls: ['./font-sizes.component.scss']
})
export class FontSizesComponent {

  displayedColumns: string[] = ['name', 'sizepx', 'sizerem', 'lineheight','useOfVariable'];
  dataSource = new MatTableDataSource<FontSizeData>([
    { name: 'Heading 1', sizepx: 60, sizerem:3.75, lineheight:72, useOfVariable:'<h1></h1>'},
    { name: 'Heading 2', sizepx: 48, sizerem:3, lineheight:60, useOfVariable:'<h2></h2>'},
    { name: 'Heading 3', sizepx: 32, sizerem:2.25, lineheight:48, useOfVariable:'<h3></h3>'},
    { name: 'Heading 4', sizepx: 28, sizerem:1.75, lineheight:36, useOfVariable:'<h4></h4>'},
    { name: 'Heading 5', sizepx: 24, sizerem:1.5, lineheight:32, useOfVariable:'<h5></h5>'},
    { name: 'Body-L', sizepx: 20, sizerem:1.25, lineheight:28, useOfVariable:'.body-L'},
    { name: 'Body-R', sizepx: 16, sizerem:1, lineheight:24, useOfVariable:'.body-R'},
    { name: 'Body-S', sizepx: 14, sizerem:0.875, lineheight:20, useOfVariable:'.body-S'},
    { name: 'CAPTION-R', sizepx: 12, sizerem:0.75, lineheight:18, useOfVariable:'.caption-R'},
    { name: 'CAPTION-S', sizepx: 10, sizerem:0.625, lineheight:16, useOfVariable:'.caption-S'},
  ]);
}
