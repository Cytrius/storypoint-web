import { Component, ElementRef } from '@angular/core';

declare var $:any;

@Component({
    templateUrl:'./requirements.view.html',
    styleUrls:['./requirements.style.scss'],
    providers: []
})
export class RequirementsView {

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

	public requirements = [
		{ 
			title:'Overview Cards',
			actor: 'User',
			function:'to see a summary of each project',
			outcome:'I can better understand the big picture',
			status_color:'green',
			progress:100,
			task_count:0
		},
		{ 
			title:'Card Filtering & Sorting',
			actor: 'User',
			function:'be able to filter the cards by status and progress',
			outcome:'I know where to focus my attention',
			status_color:'yellow',
			progress:50,
			task_count:10,
			tasks:[{ 
					description:'Add requirements count to project overview card',
					type:'functional',
					status_color:'yellow',
					status:'In Progress'
				},
				{ 
					description:'Link requirements and other clickable text to corresponding pages',
					type:'functional',
					status_color:'yellow',
					status:'In Progress'
				},
				{ 
					description:'Integrate progress bar into the card visually',
					type:'design',
					status_color:'green',
					status:'Complete'
				},
				{ 
					description:'Populate the dashboard with a bunch of test projects',
					type:'administrative',
					status_color:'blue',
					status:'To Do'
				},
				{ 
					description:'Ensure items are properly spaced for readability',
					type:'design',
					status_color:'blue',
					status:'To Do'
				},
				{ 
					description:'Try removing all projects and inspect the empty dashboard',
					type:'administrative',
					status_color:'blue',
					status:'To Do'
				}
			]
		},
		{ 
			title:'Progress Bars',
			actor: 'User',
			function:'to see a progress bar of each project',
			outcome:'i can quickly gauge completion',
			status_color:'red',
			progress:10,
			task_count:1
		}
	];


	constructor(
		private element:ElementRef,

	) {
	}

	public toggleTasks(requirementIndex:number) {
		console.log($(this.element.nativeElement).find('[requirement-index='+requirementIndex+']'));
		$(this.element.nativeElement).find('.tasks[requirement-index='+requirementIndex+']').slideToggle();
	}

	ngAfterViewInit() {
		setTimeout(() => {
			console.log($(this.element.nativeElement).find('.ui.progress'));
			$(this.element.nativeElement).find('.ui.progress').progress();
		});
	}

    /**
     * Lifecycle - On Init
     */
	ngOnInit() {

	}

}