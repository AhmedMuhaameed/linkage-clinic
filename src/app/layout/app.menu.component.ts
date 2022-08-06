import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: '',
                icon: '',
                items: [
                    { label: 'Home', icon: 'pi pi-home', routerLink: ['/'] },
                    { label: 'Appointments', icon: 'pi pi-calendar', routerLink: ['/pages/appointments'] },
                    { label: 'Medical Records', icon: 'fa fa-stethoscope', routerLink: ['/'] },
                    { label: 'Patients', icon: 'fa fa-wheelchair', routerLink: ['/'] },
                    { label: 'Assistants', icon: 'pi pi-users', routerLink: ['/'] },
                    { label: 'Drugs', icon: 'fa fa-medkit', routerLink: ['/'] },
                    { label: 'Linkage', icon: 'fa fa-question', routerLink: ['/'] },
                ]
            },
        ];
    }
}
