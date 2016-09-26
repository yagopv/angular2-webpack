import {Routes, RouterModule} from '@angular/router';
import {NgModule} from "@angular/core";
import {RouteAppComponent} from "./router-app.component";
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {ContactComponent} from "./contact/contact.component";
import {BrowserModule} from "@angular/platform-browser";

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'contact-us', redirectTo: 'contact' },
];

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    declarations: [
        RouteAppComponent,
        HomeComponent,
        AboutComponent,
        ContactComponent
    ],
    bootstrap: [
        RouteAppComponent
    ]
})
export class RouterAppModule { }