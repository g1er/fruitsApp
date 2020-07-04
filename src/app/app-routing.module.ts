import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { FruitsPageComponent } from "./fruits-page/fruits-page.component";
import { StartPageComponent } from "./start-page/start-page.component";
import { FruitPageComponent } from "./fruit-page/fruit-page.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { AuthGuard } from "./auth-guard.service";


const appRouts: Routes = [
    {path: "fruits", component: FruitsPageComponent, canActivate: [AuthGuard], children: [
        {path: ":id/:name", component: FruitPageComponent}
    ]},
    {path: "", component: StartPageComponent},
    {path: "not-found", component: NotFoundComponent},
    {path: "**", redirectTo: "not-found"}
]

@NgModule({
    imports: [RouterModule.forRoot(appRouts)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}