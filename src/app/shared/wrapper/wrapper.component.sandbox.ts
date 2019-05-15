import { sandboxOf } from 'angular-playground';
import { WrapperComponent } from './wrapper.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

export default sandboxOf(WrapperComponent, {
  declarations: [SidebarComponent]
}).add('default', {
    template: `<app-wrapper></app-wrapper>`
  });
