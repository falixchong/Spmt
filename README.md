# Spmt

## Resuming project after cloning from GitHub

Update dependancies

``` npm update ```

Install package directory

``` npm install ```

##Angular Front-End

Install curl

``` apt-get install curl ```

Install npm

``` apt-get install nodejs ```

Install angular

``` npm install -g angular-cli ```

Install Angular Material

``` ng add @angular/material ```

Generating Angular Project

``` ng new <project-name> ```

Generating Angular Module & Routing

``` ng generate module <module> --routing ```

Generating Angular Component

``` ng generate component <module-path>\<component> --module <module-name> ```

Start Angular without proxy
```
ng serve 
```
Start Angular with proxy
```
ng serve --proxy-config proxy.conf.json
```
or
```
npm start
```
proxy conf example
```
{
  "/api/*": {
    "target": "http://localhost:3000",
    "secure": false,
    "logLevel": "debug",
    "changeOrigin": true
  }
}
```



## Angular Material

Install Angular Material
``` ng add @angular/material ```

Create a Matariel Module file and import into app.module.ts
```
import { NgModule } from '@angular/core';
import { A11yModule } from '@angular/cdk/a11y';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PortalModule } from '@angular/cdk/portal';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';

@NgModule({
  exports: [
    A11yModule,
    ClipboardModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    PortalModule,
    ScrollingModule
  ]
})
export class AngularMaterialModule {}

/**  Copyright 2019 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
```


## Installing NGIX
https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-ubuntu-18-04

## Deploying Angular App Manually

<<<<<<< HEAD
Build App

``` ng build --prod ```

=======
Jenkins will manage/deploy into Server with each git commit
>>>>>>> f5fb014cff4d938ad07c732aaf0c6cdb5ba9429e

## Implementing SSL
https://www.digitalocean.com/community/tutorials/how-to-secure-apache-with-let-s-encrypt-on-ubuntu-18-04

Instead of 

``` sudo certbot --apache -d your_domain -d www.your_domain ```

Use below to generate the cert only and later add-on to nginx config

``` certbot certonly --standalone -d spointment.com -d www.spointment.com ```

Use mozilla SSL cert configurator to generate NGINX configuration

https://ssl-config.mozilla.org/

Replace generated nginx config with 
```
    ssl_certificate <letencrypt path>/fullchain.pem;
    ssl_certificate_key <letencrypt path>/privkey.pem;
    ssl_trusted_certificate <letencrypt path>/chain.pem;
```

Replace Nginx configuration in ```/etc/nginx/```


## Install MongoDB
https://www.digitalocean.com/community/tutorials/how-to-install-mongodb-on-ubuntu-18-04

## Setting up mongodb with password

List/Add User
```
use admin
db.getUsers()

db.createUser(
  {
    user: "dbadmin",
    pwd: "<password>",
    roles: ["userAdminAnyDatabase", "dbAdminAnyDatabase", "readWriteAnyDatabase"]
  }
)
```


## Install Jenkins
https://www.digitalocean.com/community/tutorials/how-to-install-jenkins-on-ubuntu-18-04

Configure Jenkins to subdomain/subdirectory

https://wiki.jenkins.io/display/JENKINS/Jenkins+behind+an+NGinX+reverse+proxy

