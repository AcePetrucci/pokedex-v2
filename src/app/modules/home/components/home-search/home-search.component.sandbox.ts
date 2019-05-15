import { sandboxOf } from 'angular-playground';
import { HomeSearchComponent } from './home-search.component';
import { FormsModule } from '@angular/forms';

export default sandboxOf(HomeSearchComponent, {
  imports: [FormsModule]
}).add('default', {
  template: `<app-home-search></app-home-search>`
});
