import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { WrapperComponent } from './wrapper/wrapper.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    SidebarComponent,
    WrapperComponent
  ],
  exports: [
    CommonModule,
    RouterModule,
    SidebarComponent,
    WrapperComponent,
  ],
})

export class SharedModule { }
