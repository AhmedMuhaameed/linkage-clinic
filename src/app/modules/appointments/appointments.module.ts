import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentsRoutingModule} from './appointments-routing.module';
import { AppointmentsHomeComponent } from './appointments-home.component'
import {FullCalendarModule} from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import {CardModule} from 'primeng/card';
import {ToolbarModule} from 'primeng/toolbar';
import {ButtonModule} from 'primeng/button';

FullCalendarModule.registerPlugins([
  dayGridPlugin,
  timeGridPlugin,
  interactionPlugin
]);

const uiModules=[
  FullCalendarModule,
  CardModule,
  ToolbarModule,
  ButtonModule
];
@NgModule({
  declarations: [
    AppointmentsHomeComponent
  ],
  imports: [
    CommonModule,
    AppointmentsRoutingModule,
    ...uiModules
  ]
})
export class AppointmentsModule { }
