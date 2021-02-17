import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { ShipsDetailsComponent } from './ships-details.component';
import { Component, Pipe, PipeTransform } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { StoreModule } from '@ngrx/store';
import { ShipsReducer } from 'src/app/store/reducers/ships.reducer';

describe('ShipsDetailsComponent', () => {
  let component: ShipsDetailsComponent;
  let fixture: ComponentFixture<ShipsDetailsComponent>;


  @Pipe({ name: 'paginate' })
  class MockPipe implements PipeTransform {
    transform(value: number): number {
      // Do stuff here, if you want
      return value;
    }
  }

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, NgxPaginationModule,
        StoreModule.forRoot({
          ships: ShipsReducer
        })],
      declarations: [ShipsDetailsComponent, MockPipe]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Try', () => {
    expect(1).toEqual(1);
  });
});
