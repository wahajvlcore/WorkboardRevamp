import { NgModule} from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { DesignSystemComponent } from './design-system/design-system.component';
import { NoHyphenBetweenPipe } from './no-hyphen-between.pipe';
import { MatTableModule } from '@angular/material/table';
import { FontSizesComponent } from './design-system/font-sizes/font-sizes.component';
import { ButtonsComponent } from './design-system/buttons/buttons.component';
import { PillsComponent } from './design-system/pills/pills.component';
import { GridSystemComponent } from './design-system/grid-system/grid-system.component';
import { ColorPaletteComponent } from './design-system/color-palette/color-palette.component'; 
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ClipboardModule } from '@angular/cdk/clipboard';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';



@NgModule({
  declarations: [
    AppComponent,
    DesignSystemComponent,
    NoHyphenBetweenPipe,
    FontSizesComponent,
    ButtonsComponent,
    PillsComponent,
    GridSystemComponent,
    ColorPaletteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatMenuModule,
    MatTooltipModule,
    ClipboardModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule
    
  ],
  providers: [
     provideClientHydration(),
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
