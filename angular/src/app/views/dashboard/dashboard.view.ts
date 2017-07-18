import { Component, ElementRef } from '@angular/core';


@Component({
    templateUrl:'./dashboard.view.html',
    styleUrls:['./dashboard.style.scss'],
    providers: []
})
export class DashboardView {

	public projects = [
		{
			title:'Homepage',
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
			title:'Project Dashboard',
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
			title:'Business Brief Editor',
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
			title:'Reports',
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
			title:'User Management',
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

	) {
	}


    /**
     * Lifecycle - On Init
     */
	ngOnInit() {

	}

}