import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell.component';
import { ModulesRoutingModule } from './modules-routing.module';
import {AppLayoutModule} from '../layout/app.layout.module';


@NgModule({
  declarations: [
    ShellComponent,

  ],
  imports: [
    CommonModule,
    ModulesRoutingModule,
  ],
  bootstrap: [ShellComponent],
})
export class ModulesModule { }
