import { Component, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-home-search',
  templateUrl: './home-search.component.html',
  styleUrls: ['./home-search.component.styl']
})
export class HomeSearchComponent implements OnDestroy {

  @Output() onSearch: EventEmitter<string> = new EventEmitter();

  private _searchDebouncer: Subject<string> = new Subject();
  private _destroy: Subject<boolean> = new Subject();
  pokemonName: string;

  constructor() {
    this._searchDebouncer.pipe(debounceTime(500), takeUntil(this._destroy)).subscribe(name => this.onSearch.emit(name))
  }

  searchPokemon() {
    this._searchDebouncer.next(this.pokemonName);
  }

  ngOnDestroy() {
    this._destroy.next(true);
    this._destroy.unsubscribe();
  }
}
