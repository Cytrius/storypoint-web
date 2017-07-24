import { Component, ElementRef } from '@angular/core';

declare var $:any;

@Component({
    templateUrl:'./sprints.view.html',
    styleUrls:['./sprints.style.scss'],
    providers: []
})
export class SprintsView {

	public project = {
		title:'Project Dashboard',
		created_at:'March 23, 2017',
		description:'Initial landing page with project cards',
		status:'In Progress',
		status_color:'yellow',
		requirements_count:15,
		comment_count: 34,
		resource_count:2,
		task_count: 5,
		progress:50,
		health:'On Track'
	};


	constructor(
		private element:ElementRef,
	) {

	}


    /**
     * Lifecycle - On Init
     */
	ngOnInit() {
		setTimeout(() => {
			console.log($(this.element.nativeElement).find('.ui.progress'));
			$(this.element.nativeElement).find('.ui.progress').progress();

		});
	}

}