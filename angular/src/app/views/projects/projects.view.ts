import { Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

declare var $:any;

@Component({
    templateUrl:'./projects.view.html',
    styleUrls:['./projects.style.scss'],
    providers: []
})
export class ProjectsView {

	public projects = [
		{
			title:'Performance 2.0',
			created_at:'May 16, 2017',
			description:'Landing page for the storypoint website - big bold cta',
			status:'Complete',
			status_color:'green',
			requirements_count:8,
			resource_count:1,
			progress:100,
			health:'Done'
		},
		{
			title:'Roles and Permissions',
			created_at:'March 23, 2017',
			description:'Initial landing page with project cards',
			status:'In Progress',
			status_color:'yellow',
			requirements_count:15,
			resource_count:2,
			progress:50,
			health:'On Track'
		},
		{
			title:'Payment and Billing',
			created_at:'June 1, 2017',
			description:'WYSIWYG editor for document style requirements writing',
			status:'Aproved',
			status_color:'blue',
			requirements_count:2,
			resource_count:3,
			progress:10,
			health:'On Track'
		},
		{
			title:'Notification Center',
			created_at:'June 1, 2017',
			description:'Reporting section with lots of big charts and graphs',
			status:'Planning',
			status_color:'',
			requirements_count:0,
			resource_count:0,
			progress:0,
			health:'On Track'
		},
		{
			title:'Time Off 2.0',
			created_at:'June 1, 2017',
			description:'Manage, assign, invite, and delegate resources',
			status:'Planning',
			status_color:'',
			requirements_count:0,
			resource_count:0,
			progress:0,
			health:'Behind'
		}
	];


	constructor(
		private element:ElementRef,
		private router:Router
	) {
	}


    /**
     * Lifecycle - On Init
     */
	ngOnInit() {
		setTimeout(() => {
			$(this.element.nativeElement).find('.ui.progress').progress();
			$(this.element.nativeElement).find('.ui.dropdown').dropdown();
		});
	}

}