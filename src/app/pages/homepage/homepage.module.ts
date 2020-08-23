import { NgModule } from '@angular/core'
import { ngModuleJitUrl } from '@angular/compiler';
import { DashboardComponent } from './components/dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
const routes: Routes = [
    { path: "", redirectTo: "dashboard", pathMatch: "full"},
    { path: "dashboard", component: DashboardComponent },
]

@NgModule({
    bootstrap: [],
    providers: [],
    declarations: [DashboardComponent],
    imports:[
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports:[]
})
export class HomepageModule{
}