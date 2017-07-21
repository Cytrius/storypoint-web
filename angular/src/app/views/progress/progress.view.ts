import { Component, ElementRef } from '@angular/core';

import * as Chart from 'chart.js';
import * as moment from 'moment';

declare var $:any;

@Component({
    templateUrl:'./progress.view.html',
    styleUrls:['./progress.style.scss'],
    providers: []
})
export class ProgressView {

	public chart;

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
		health:'On Track',
		health_color:'green',
		due_date:moment().add(14, 'days')
	};


	constructor(
		private element:ElementRef,
	) {

	}

	renderChart() {
		console.log($(this.element.nativeElement).find('.chart'));
		if ($(this.element.nativeElement).find('.chart').length)
		{
			let daysUntilDueDate = this.project.due_date.diff(moment(), 'days');
			let xAxis = Array(daysUntilDueDate).fill('');
			xAxis[0] = moment().format('MMM D');
			xAxis[xAxis.length-1] = this.project.due_date.format('MMM D');
			this.chart = new Chart($(this.element.nativeElement).find('.chart')[0].getContext('2d'), {
			    type: 'line',
			    data: {
			        labels: xAxis,
			        datasets: [{
			            label: 'Tasks Complete',
			            fill:false,
			            data: [12, 12, 11, 10, 9, 9, 9, 4, null, null, null, null],
			            borderWidth: 3,
			            borderColor: '#2185d0'
			        },
			        {
			            label: 'estimated',
			            fill:false,
			            data: Array.from(Array(daysUntilDueDate).keys()).reverse(),
			            borderWidth: 3,
			            borderColor: '#21ba45',
			            pointRadius:0
			        }]
			    },
			    options: {
			    	layout: {
			    		padding:10
			    	},
			    	legend: {
			    		display:false
			    	},
			        scales: {
			            yAxes: [{
			                display:false,
			                gridLines:false,
							ticks: {
				            	beginAtZero: true
				            }
			            }],
			            xAxes: [{
			                display:true,
			                gridLines:false,
			                ticks: {
				            	beginAtZero: true
				            }
			            }]
			        }
			    }
			});
		}
	}


    /**
     * Lifecycle - On Init
     */
	ngOnInit() {
		setTimeout(() => {
			console.log($(this.element.nativeElement).find('.ui.progress'));
			$(this.element.nativeElement).find('.ui.progress').progress();

			this.renderChart();

		});
	}

}