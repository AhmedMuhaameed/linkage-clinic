import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
  selector: 'app-appointments-home',
  templateUrl: './appointments-home.component.html',
  styleUrls: ['./appointments-home.component.scss'],
})
export class AppointmentsHomeComponent implements OnInit {
  @ViewChild('calendar') calendar:any;
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay',
    },
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    handleWindowResize:true,
  };
  constructor(private layoutService:LayoutService) {
   
  }
  ngOnInit(): void {
    this.layoutService.overlayOpen$.subscribe((val)=>{
      setTimeout(() => {
        this.calendar.calendar.render();
      }, 110);
      
    })
  }
}
