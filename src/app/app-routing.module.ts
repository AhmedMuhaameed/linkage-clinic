import { NgModule } from '@angular/core';
import { ExtraOptions,RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './layout/app.layout.component';
export const routes: Routes = [
  {
      path: 'pages', component: AppLayoutComponent,
      children: [
          { path: '', loadChildren: () => import('./modules/modules.module').then(m => m.ModulesModule) },
      ],
  },
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages' }
];
const config: ExtraOptions = {
  useHash: true,
};


@NgModule({
  imports: [RouterModule.forRoot(routes,config)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
