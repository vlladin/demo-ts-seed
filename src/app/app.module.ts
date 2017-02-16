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
import {RouterModule, Router} from "@angular/router";
import {routing} from "./app.routes";
import {PageNotFoundComponent} from "./not-found/not-found.component";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpModule, Http, XHRBackend, RequestOptions} from "@angular/http";
import {HttpInterceptor} from "./common/http.interceptor";
import {ConfirmDirective} from "./shared/confirm.directive";
import {CustomButtonDirective} from "./shared/custom-button.directive";
import {DelayDirective} from "./shared/delay-show.directive";

@NgModule({
    declarations: [
        AppComponent, TeamComponent,
        AddMemberComponent, UserComponent,
        AvatarComponent, TruncatePipe,
        HeaderComponent, PageNotFoundComponent,
        ConfirmDirective, CustomButtonDirective, DelayDirective

    ],
    imports: [
        BrowserModule, ReactiveFormsModule, HttpModule, RouterModule, routing
    ],
    providers: [UserService,
       Http, {
            provide: Http, useFactory: (xhrBackend: XHRBackend, requestOptions:
                RequestOptions, router: Router) =>
                new HttpInterceptor(xhrBackend, requestOptions, router),
            deps: [XHRBackend, RequestOptions, Router]
        }
    ],
    bootstrap: [AppComponent]
})

export class AppModule {

}
