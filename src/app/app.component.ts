import { Component } from '@angular/core';

import {AlertController, ModalController, Platform} from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import {Capacitor, Plugins, Permissions} from '@capacitor/core';
import {SiteDataService} from '../providers/site-data/site-data.service';
const { Device } = Plugins;
const { Storage } = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public isPermitted = false;
  siteName = this.siteData.siteName;
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    }
  ];
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private alertCtrl: AlertController,
    private modal: ModalController,
    private siteData: SiteDataService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      if (Capacitor.isPluginAvailable('SplashScreen')) {
        Plugins.SplashScreen.hide().then().catch(error => console.error(error));
      }
      if (Capacitor.isPluginAvailable('Device')) {
        Plugins.Device.getInfo().then().catch(error => console.error(error));
        const deviceInfo = Device.getInfo();
        // TODO remove console log display device info
        // console.log(deviceInfo);
      }
      const permissions = Permissions.requestPermissions();
      if (Capacitor.isPluginAvailable('PermissionRequestedEvent')) {
        Plugins.Permissions.requestPermissions().then().catch();
      }
      this.checkPermission();
    });
  }

  async checkPermission() {
    const getPermissions = await Storage.get({key : 'currentPermissions'});
    // TODO remove console log display permissions
    // console.log('My permissions: ' + getPermissions);
    if (!getPermissions) {
      const alert = await this.alertCtrl.create({
        header: 'Permissions...',
        // subHeader: 'Allow the Following',
        message: 'Mattress and Things would like ' +
            'to access the camera, microphone, photo, ' +
            'storage, location and set notifications on this device',
        buttons: [
          {
            text: 'Ok',
            handler: () => {
              this.setPermissions();
            }
          },
          {
            text: 'Maybe Later',
            role: 'cancel',
            handler: () => {
              this.setTempPermissions();
            }
          }
        ]
      });
      await alert.present();
    }
  }

  async setPermissions() {
    this.isPermitted = true;
    // const settingPermissions = Storage.set({key : currentPermissions, value: JSON.stringify(value) });
  }

  async setTempPermissions() { }
}
