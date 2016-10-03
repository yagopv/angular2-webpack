import {Routes, RouterModule} from '@angular/router';
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {ContactComponent} from "./contact/contact.component";
import {ObservableComponent} from "./observable/observable.component";
import {NumbersService} from "./observable/numbers.service";
import {BrowserModule} from "@angular/platform-browser";

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'observable', component: ObservableComponent },
    { path: 'contact-us', redirectTo: 'contact' },
];

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        ContactComponent,
        ObservableComponent
    ],
    providers: [
        NumbersService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }