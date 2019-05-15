import { sandboxOf } from 'angular-playground';
import { SidebarComponent } from './sidebar.component';

export default sandboxOf(SidebarComponent)
  .add('default', {
    template: `<app-sidebar></app-sidebar>`
  });
