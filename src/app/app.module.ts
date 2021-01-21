import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes} from "@angular/router";
import { AppComponent } from './app.component';
import { MainbarComponent } from './mainbar/mainbar.component';
import { AuthComponent} from "./auth/auth.component";
import { ReportComponent } from './report/report.component';
import { FooterComponent } from './footer/footer.component';

const appRoutes: Routes =[
  { path: 'mainbar', component: MainbarComponent },
  { path: 'report', component: ReportComponent },
  { path: 'footer', component: FooterComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MainbarComponent,
    AuthComponent,
    ReportComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
