import { Component, ElementRef } from '@angular/core';

declare var $:any;

@Component({
    templateUrl:'./bugs.view.html',
    styleUrls:['./bugs.style.scss'],
    providers: []
})
export class BugsView {

	public bugs = [{ 
			description:'Cant reset password using the forgot password link',
			type:'bug',
			severity:'Critical',
			severity_color:'red',
			occurrence_count:4,
			occurred:true,
			component:'Feedback Screen'
		},
		{ 
			description:'Filtering list by date doesnt do anything',
			type:'bug',
			severity:'Low',
			severity_color:'gray',
			occurrence_count:23,
			occurred:false,
			component:'Global Filtering'
		},
		{ 
			description:'Cant find ability to search projects as per requirements',
			type:'defect',
			severity:'Medium',
			severity_color:'yellow',
			occurrence_count:0,
			occurred:true,
			component:'Voting Page'
		},
		{ 
			description:'Adding an item to the first list causes some margin issues',
			type:'design',
			severity:'High',
			severity_color:'orange',
			occurrence_count:1,
			occurred:false,
			component:'Feedback Screen'
		}
	];


	constructor(
		private element:ElementRef,
	) {

	}

	sizeLabels() {
		setTimeout(() => {
			let labelClasses:string[] = [
				'.ui.label.component',
				'.ui.label.severity',
				'.ui.label.occurrence'
			];
			for(let labelClass of labelClasses) {
				let labels = $(this.element.nativeElement).find(labelClass);
				let minWidth = 0;
				for(let label of labels) {
					minWidth = $(label).outerWidth() > minWidth ? $(label).outerWidth() : minWidth;
				}
				$(this.element.nativeElement).find(labelClass).css({ 'min-width' : Math.ceil(minWidth)});
			}
		});
	}

    /**
     * Lifecycle - On Init
     */
	ngOnInit() {
		setTimeout(() => {
			$(this.element.nativeElement).find('.ui.progress').progress();
			$(this.element.nativeElement).find('.ui.dropdown').dropdown();
			this.sizeLabels();
		});
	}

}