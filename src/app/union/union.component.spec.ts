import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnionComponent } from './union.component';

describe('UnionComponent', () => {
  let component: UnionComponent;
  let fixture: ComponentFixture<UnionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
