import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './core.component';
import { HeaderComponent } from './component/header/header.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { ViewComponent } from './component/view/view.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { OrderDetailsComponent } from './component/order-details/order-details.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatNativeDateModule} from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {NgIf} from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatPaginatorModule} from '@angular/material/paginator';



@NgModule({
  declarations: [
    CoreComponent,
    HeaderComponent,
    ViewComponent,
    OrderDetailsComponent
  ],
  exports: [HeaderComponent, ViewComponent, OrderDetailsComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    MatButtonModule,
    MatMenuModule,
    MatFormFieldModule,
    MatSelectModule,
    MatNativeDateModule,
    MatInputModule,
    MatDatepickerModule,
    MatIconModule,
    FormsModule,
    MatTableModule,
    MatSidenavModule,
    NgIf,
    MatExpansionModule,
    MatCheckboxModule,
    MatPaginatorModule
  ]
})
export class CoreModule { }
