import { Component, OnInit } from '@angular/core';

import echarts from '../../libs/echarts.common.min.js';

@Component({
	selector: 'welcome',
	templateUrl: 'welcome.component.html'
})

export class WelcomeComponent implements OnInit {

	ngOnInit() {
		console.log(echarts);
	}
}