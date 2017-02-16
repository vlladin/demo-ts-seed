import {Routes, RouterModule} from "@angular/router";
import {AddMemberComponent} from "./add-member/add-member.component";
import {TeamComponent} from "./team/team.component";
import {PageNotFoundComponent} from "./not-found/not-found.component";

const routes: Routes = [
    { path: '', component: AddMemberComponent},
    { path: 'add-member', component: AddMemberComponent},
    { path: 'team', component: TeamComponent},
    { path: '**', component: PageNotFoundComponent},
];


export const routing = RouterModule.forRoot(routes);