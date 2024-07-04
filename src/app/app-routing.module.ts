import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesignSystemComponent } from './design-system/design-system.component';
import { ButtonsComponent } from './design-system/buttons/buttons.component';
import { PillsComponent } from './design-system/pills/pills.component';
import { ColorPaletteComponent } from './design-system/color-palette/color-palette.component';
import { FontSizesComponent } from './design-system/font-sizes/font-sizes.component';
import { GridSystemComponent } from './design-system/grid-system/grid-system.component';

const routes: Routes = [
  { path: 'core', loadChildren: () => import('./core/core.module').then(m => m.CoreModule) },
  {
    path: 'design-system',
    component: DesignSystemComponent,
    children: [
      { path: 'buttons', component: ButtonsComponent },
      { path: 'pills', component: PillsComponent },
      { path: 'color-palette', component: ColorPaletteComponent },
      { path: 'font-sizes', component: FontSizesComponent },
      { path: 'grid-system', component: GridSystemComponent },
      { path: '', redirectTo: '/design-system/color-palette', pathMatch: 'full' } // Default route within design system
    ]
  },
  //{ path: '**', redirectTo: '/design-system/color-palette' } // Default route if no match
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
