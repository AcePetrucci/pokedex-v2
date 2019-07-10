import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { HomeSearchResultsComponent } from './components/home-search-results/home-search-results.component';
import { HomeSearchComponent } from './components/home-search/home-search.component';

import { HomePokemonService } from './services/home-pokemon.service';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
    HomeSearchResultsComponent,
    HomeSearchComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
  ],
  providers: [
    HomePokemonService
  ],
  exports: [
    HomeSearchComponent,
    HomeSearchResultsComponent
  ]
})
export class HomeModule { }
