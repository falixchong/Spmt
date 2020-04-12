import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SportGameComponent } from './sport-game.component';

describe('SportGameComponent', () => {
	let component: SportGameComponent;
	let fixture: ComponentFixture<SportGameComponent>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				declarations: [ SportGameComponent ]
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(SportGameComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
