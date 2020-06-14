import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { FruitsPageComponent } from "./fruits-page/fruits-page.component";
import { StartPageComponent } from "./start-page/start-page.component";


const appRouts: Routes = [
    {path: "fruits", component: FruitsPageComponent},
    {path: "", component: StartPageComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(appRouts)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}