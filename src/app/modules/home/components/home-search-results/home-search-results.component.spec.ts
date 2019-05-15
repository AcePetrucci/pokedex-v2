import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSearchResultsComponent } from './home-search-results.component';

describe('HomeSearchResultsComponent', () => {
  let component: HomeSearchResultsComponent;
  let fixture: ComponentFixture<HomeSearchResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeSearchResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSearchResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
