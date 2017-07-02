import { IProperty } from './../interface/IProperty';
import { Injectable } from '@angular/core';
import properties from './mock-properties';

interface IFav {
    id: number;
    property: string;
}

@Injectable()
export class PropertyService {
    favCounter: number = 0;
    favs: Array<IFav> = [];
    
    findAll() {
        return Promise.resolve(properties);
    }

    findById(id) {
        return Promise.resolve( properties[id - 1] );
    }

    findByName(searchKey: string): Promise<string> {
        let key = searchKey.toUpperCase();
    
        let filters = properties.filter((p: IProperty) => {
            return (`${p.title} ${p.address} ${p.city} ${p.description}`).toUpperCase().indexOf(key) > -1;
        });

        return Promise.resolve('');
    }

    getFav() {
        return Promise.resolve(this.favs);
    }

    setFav(property) {
        this.favCounter++;
        this.favs.push({
            id: this.favCounter,
            property: property, 
        });

        return Promise.resolve();
    }

    unFav(fav) {
        let index = this.favs.indexOf(fav);
        if(index > -1) {
            this.favs.splice(index, 1);
        }

        return Promise.resolve();
    }
}