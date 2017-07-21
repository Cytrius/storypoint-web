import { Component, ElementRef } from '@angular/core';

declare var $:any;

@Component({
    templateUrl:'./resources.view.html',
    styleUrls:['./resources.style.scss'],
    providers: []
})
export class ResourcesView {

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

	public resources = [
		{
			name:'Kevin',
			avatar: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/7/000/224/1c5/022c4e6.jpg',
			title:'Lead Developer',
			skills:'HTML, CSS, Angular, PHP, Javascript'
		},
		{
			name:'Kazi',
			avatar: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAu9AAAAJDkyYTYxYmM4LTg0MTktNGU4OS05NmJjLTg3ZGYxNGQwYmEzZg.jpg',
			title:'Developer',
			skills:'HTML, CSS, PHP, Javascript'
		},
		{
			name:'SJ',
			avatar: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAn_AAAAJGU5NDQ2NjEwLWUxOWItNGJjZC1iMDA4LTU1MzM3NDg1YzFjZg.jpg',
			title:'UI/UX Designer',
			skills:'UI, Sketch, Typography, Iconography'
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
		setTimeout(() => {
			console.log($(this.element.nativeElement).find('.ui.progress'));
			$(this.element.nativeElement).find('.ui.progress').progress();

		});
	}

}