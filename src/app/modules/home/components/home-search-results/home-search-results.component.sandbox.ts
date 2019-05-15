import { sandboxOf } from 'angular-playground';
import { HomeSearchResultsComponent } from './home-search-results.component';

import { pokemonBasicInfoMock } from 'src/app/core/mocks';

export default sandboxOf(HomeSearchResultsComponent)
  .add('default', {
    template: `<app-home-search-results></app-home-search-results>`
  });
