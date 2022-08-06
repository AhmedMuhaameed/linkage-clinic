import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ShellComponent } from './shell.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: 'appointments',
        loadChildren: () => import('./appointments/appointments.module')
          .then(m => m.AppointmentsModule),
      },
    ],
  },
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class ModulesRoutingModule { }
