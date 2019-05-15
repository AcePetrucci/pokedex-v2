import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { HomeSearchResultsComponent } from './components/home-search-results/home-search-results.component';
import { HomeSearchComponent } from './components/home-search/home-search.component';

@NgModule({
  declarations: [
    HomeComponent,
    HomeSearchResultsComponent,
    HomeSearchComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    HomeSearchComponent,
    HomeSearchResultsComponent
  ]
})
export class HomeModule { }
