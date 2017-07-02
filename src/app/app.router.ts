import { IMenuItem } from '../interface/IMenuItem';
import { PropertyListComponent } from '../pages/property-list/property-list.component';
import { BrokerListComponent } from '../pages/broker-list/broker-list.component';
import { FavoriteListComponent } from '../pages/favorite-list/favorite-list.component';
import { WelcomeComponent } from '../pages/welcome/welcome.component';
import { AboutComponent } from '../pages/about/about.component';

export const appMenuItems: Array<IMenuItem> = [
    {
        title: 'Properties',
        component: PropertyListComponent,
        icon: 'home'
    },
    {
        title: 'Brokers',
        component: BrokerListComponent,
        icon: 'people'
    },
    {
        title: 'Favorites',
        component: FavoriteListComponent,
        icon: 'star'
    },
    {
        title: 'Get Preapproved',
        component: WelcomeComponent,
        icon: 'checkmark-circle'
    }
];

export const accountMenuItems = [
    {
        title: 'My Account',
        component: WelcomeComponent,
        icon: 'ios-contact'
    },
    {
        title: 'Logout',
        component: WelcomeComponent,
        icon: 'log-out'
    }
];

export const helpMenuItems = [
    {
        title: 'Welcome',
        component: WelcomeComponent,
        icon: 'bookmark'
    },
    {
        title: 'About',
        component: AboutComponent,
        icon: 'information-circle'
    }
];