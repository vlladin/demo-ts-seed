import {NgModule} from '@angular/core'
import {AppComponent} from './app.component';
import {BrowserModule} from "@angular/platform-browser";
import {UserComponent} from "./user/user.component";
import {AvatarComponent} from "./avatar/avatar.component";

@NgModule({
  declarations: [
    AppComponent, UserComponent, AvatarComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
