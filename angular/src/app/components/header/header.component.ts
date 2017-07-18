import { Component, ElementRef } from '@angular/core';


@Component({
	selector: 'header',
    templateUrl:'./header.template.html',
    styleUrls:['./header.style.scss'],
    providers: []
})
export class HeaderComponent {


	constructor(
		private element:ElementRef,

	) {
	}


    /**
     * Lifecycle - On Init
     */
	ngOnInit() {

	}

}