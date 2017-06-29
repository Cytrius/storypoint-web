import { Component, SimpleChanges, OnChanges } from '@angular/core';

import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnChanges {

	title = 'StoryPoint';

	test:any;

	constructor() {
		this.test = 'test';
	}

	ngOnChanges(changes:SimpleChanges) {
		console.log(changes);
	}

	modelChange() {
		console.log(this.test);
	}

	tester() {
		console.log(this.test);
	}

	ngAfterViewInit() {
		$('.app-loader').toggleClass('active');
	}
}
