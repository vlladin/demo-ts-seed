import {NgModule} from '@angular/core'
import {AppComponent} from './app.component';
import {BrowserModule} from "@angular/platform-browser";
import {UserComponent} from "./user/user.component";
import {AvatarComponent} from "./avatar/avatar.component";
import {TruncatePipe} from "./shared/truncate.pipe";
import {UserService} from "./shared/user.service";
import {HeaderComponent} from "./header/header.component";
import {TeamComponent} from "./team/team.component";
import {AddMemberComponent} from "./add-member/add-member.component";
import {RouterModule} from "@angular/router";
import {routing} from "./app.routes";
import {PageNotFoundComponent} from "./not-found/not-found.component";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
    declarations: [
        AppComponent, TeamComponent,
        AddMemberComponent, UserComponent,
        AvatarComponent, TruncatePipe,
        HeaderComponent, PageNotFoundComponent,

    ],
    imports: [
        BrowserModule, ReactiveFormsModule, RouterModule, routing
    ],
    providers: [UserService
    ],
    bootstrap: [AppComponent]
})

export class AppModule {

}
