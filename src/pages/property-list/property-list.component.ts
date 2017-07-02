import { Component, OnInit } from '@angular/core';
import { Config, NavController } from 'ionic-angular';

import leaflet from 'leaflet';
import { IProperty } from '../../interface/IProperty';
import { PropertyService } from '../../providers/property-service-mock';

@Component({
	selector: 'property-list',
	templateUrl: 'property-list.component.html'
})

export class PropertyListComponent implements OnInit {

	properties: Array<IProperty>;
    searchKey: string = "";
    viewMode: string = "list";
    map;
    markersGroup;

	constructor(
		public navCtrl: NavController,
		public service: PropertyService,
		public config: Config) {

        this.findAll();
    }

	ngOnInit() { }

	findAll() {
		this.service.findAll()
			.then(data => this.properties = data)
			.catch(error => alert(error));
    }
}