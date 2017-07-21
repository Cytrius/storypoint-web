import { Component, ElementRef, Input } from '@angular/core';


@Component({
	selector: 'project-header',
    templateUrl:'./project-header.template.html',
    styleUrls:['./project-header.style.scss'],
    providers: []
})
export class ProjectHeaderComponent {

	@Input() project:any;

	@Input() pageTitle:string;

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