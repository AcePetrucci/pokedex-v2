import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { WrapperComponent } from './wrapper/wrapper.component';

import { SanitizeHtmlPipe } from './pipes/sanitize-html.pipe';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    SidebarComponent,
    WrapperComponent,
    SanitizeHtmlPipe,
  ],
  exports: [
    CommonModule,
    RouterModule,
    SidebarComponent,
    WrapperComponent,
    SanitizeHtmlPipe,
  ],
})

export class SharedModule { }
