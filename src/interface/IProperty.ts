import { IBroker } from './IBroker';

export interface IProperty {
    id: number;
    address: string;
    city: string;
    state: string;
    zip: string;
    price: string;
    title: string;
    bedrooms: number;
    bathrooms: number;
    long: number;
    lat: number;
    picture: string;
    thumbnail: string;
    tags: string;
    description: string;
    broker: IBroker;
}