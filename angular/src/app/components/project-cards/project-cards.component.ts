import { Component, ElementRef, Input } from '@angular/core';

declare var $:any;

@Component({
	selector: 'project-cards',
    templateUrl:'./project-cards.template.html',
    styleUrls:['./project-cards.style.scss'],
    providers: []
})
export class ProjectCardsComponent {

	@Input() projects:any;
	@Input() showAddNew:boolean;

	constructor(
		private element:ElementRef,

	) {
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