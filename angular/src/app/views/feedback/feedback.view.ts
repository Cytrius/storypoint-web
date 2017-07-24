import { Component, ElementRef } from '@angular/core';

declare var $:any;

@Component({
    templateUrl:'./feedback.view.html',
    styleUrls:['./feedback.style.scss'],
    providers: []
})
export class FeedbackView {

	public feedback = [{ 
			description:'Users should be able to submit new feedback items',
			details:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non velit ipsum. Fusce ullamcorper mauris vitae fringilla efficitur. Phasellus condimentum tempus mi ac tincidunt. Suspendisse nec lacus congue, tristique enim sit amet, malesuada eros. Nulla at ultrices purus, et aliquam augue. Integer eros nisi, imperdiet quis elementum vel, luctus sed purus. Curabitur tristique a lacus in sodales. Suspendisse at ante eget quam dignissim dignissim a sed augue.',
			type:'functional',
			vote_count:4,
			voted:true,
			component:'Feedback Screen'
		},
		{ 
			description:'It would be nice if the feedback list filtered during creation',
			type:'functional',
			vote_count:23,
			voted:true,
			component:'Global Filtering'
		},
		{ 
			description:'Allow voting on user feedback, keep track of votes in the list item',
			type:'design',
			vote_count:0,
			voted:false,
			component:'Voting Page'
		},
		{ 
			description:'Allow users to delete feedback that is no longer relevant',
			type:'administrative',
			vote_count:1,
			voted:false,
			component:'Feedback Screen'
		}
	];


	constructor(
		private element:ElementRef,
	) {

	}

	showDetails(index:number) {
		$('.ui.feedback.segment[data-feedback-index='+index+']').find('p.details').slideToggle();
	}

	sizeLabels() {
		setTimeout(() => {
			let labelClasses:string[] = [
				'.ui.label.component',
				'.ui.label.votes'
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