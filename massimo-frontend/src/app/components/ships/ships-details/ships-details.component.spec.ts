import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { ShipsDetailsComponent } from './ships-details.component';
import { Component, Pipe, PipeTransform } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';

describe('ShipsDetailsComponent', () => {
  let component: ShipsDetailsComponent;
  let fixture: ComponentFixture<ShipsDetailsComponent>;


  @Pipe({name: 'paginate'})
  class MockPipe implements PipeTransform {
      transform(value: number): number {
          // Do stuff here, if you want
          return value;
      }
  }

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, NgxPaginationModule],
      declarations: [ ShipsDetailsComponent, MockPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipsDetailsComponent);
    component = fixture.componentInstance;
    component.dataList = {};
    fixture.detectChanges();
  });

  it('Try', () => {
    expect(1).toEqual(1);
  });
});
