import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';
import { PageNotFoundComponent } from './common/page-not-found/page-not-found.component';
import { MainModule } from './main/main.module';

@NgModule({
	declarations: [ AppComponent, PageNotFoundComponent ],
	imports: [ BrowserModule, LoginModule, RegisterModule, MainModule, AppRoutingModule ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
