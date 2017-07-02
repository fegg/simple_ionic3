import { PropertyService } from './../providers/property-service-mock';
// Angular Imports
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

// ionic Imports
import { IonicModule, IonicApp, IonicErrorHandler } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// This Module's Components
import { AppComponent } from './app.component';
import { AboutComponent } from '../pages/about/about.component';
import { BrokerListComponent } from '../pages/broker-list/broker-list.component';
import { BrokerDetailComponent } from '../pages/broker-detail/broker-detail.component';
import { FavoriteListComponent } from './../pages/favorite-list/favorite-list.component';
import { PropertyDetailComponent } from './../pages/property-detail/property-detail.component';
import { PropertyListComponent } from './../pages/property-list/property-list.component';
import { WelcomeComponent } from './../pages/welcome/welcome.component';
import { BrokerService } from '../providers/broker-service-mock';

@NgModule({
    imports: [
        BrowserModule,        
        HttpModule,
        IonicModule.forRoot(AppComponent)
    ],
    declarations: [
        AppComponent,
        WelcomeComponent,
        AboutComponent,
        PropertyListComponent,
        PropertyDetailComponent,
        FavoriteListComponent,
        BrokerListComponent,
        BrokerDetailComponent
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        AppComponent,
        WelcomeComponent,
        AboutComponent,
        PropertyListComponent,
        PropertyDetailComponent,
        FavoriteListComponent,
        BrokerListComponent,
        BrokerDetailComponent
    ],
    providers: [
        StatusBar,
        SplashScreen,
        BrokerService,
        PropertyService,
        {
            provide: ErrorHandler,
            useClass: IonicErrorHandler
        }
    ]
})
export class AppModule {

}
