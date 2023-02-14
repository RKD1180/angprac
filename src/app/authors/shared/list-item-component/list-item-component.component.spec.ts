import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListItemComponentComponent } from './list-item-component.component';

describe('ListItemComponentComponent', () => {
  let component: ListItemComponentComponent;
  let fixture: ComponentFixture<ListItemComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListItemComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListItemComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
