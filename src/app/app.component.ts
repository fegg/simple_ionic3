import { Component, ViewChild } from '@angular/core';

// ionic import
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { WelcomeComponent } from '../pages/welcome/welcome.component';
import { IMenuItem } from '../interface/IMenuItem';

// router import
import { appMenuItems, accountMenuItems, helpMenuItems } from './app.router';

@Component({
    templateUrl: 'app.component.html',
})
export class AppComponent {
    @ViewChild(Nav) nav: Nav;

    rootPage: any = WelcomeComponent;

    appMenuItems: Array<IMenuItem>;

    accountMenuItems: Array<IMenuItem>;

    helpMenuItems: Array<IMenuItem>;

    constructor(
        public platform: Platform,
        public statusBar: StatusBar,
        public splashScreen: SplashScreen) {
    
        // 初始化 app
        this.initializeApp();

        // 初始化 router
        this.appMenuItems = appMenuItems;
        this.accountMenuItems = accountMenuItems;
        this.helpMenuItems = helpMenuItems;
    }

    initializeApp() {
        // ionic ready 状态的时候
        this.platform.ready().then(_ => {
            // light
            this.statusBar.styleLightContent();
            this.splashScreen.hide();
        });
    }

    openPage(page: IMenuItem) {
        this.nav.setRoot(page.component);
    }
}
