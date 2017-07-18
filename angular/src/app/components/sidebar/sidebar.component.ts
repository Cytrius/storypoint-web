import { Component, ElementRef } from '@angular/core';


@Component({
	selector: 'sidebar',
    templateUrl:'./sidebar.template.html',
    styleUrls:['./sidebar.style.scss'],
    providers: []
})
export class SidebarComponent {


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