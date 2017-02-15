import {Component} from '@angular/core';
import {UserModel} from "./shared/UserModel";

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {

    private pathName: string;
    private userList: UserModel[];
    private selectedUserName: string;

    constructor() {
        this.pathName = "http://";
        this.userList = this.generateUsers();
    }

    private onUserName = (name: string) => {
        this.selectedUserName = name;
    };

    private generateUsers = (): UserModel[] => {
        let ret: UserModel[] = [];

        ret.push(new UserModel("john", 22));
        ret.push(new UserModel("mike", 33));
        ret.push(new UserModel("romeo", 44));
        ret.push(new UserModel("xavier", 55));

        return ret
    }
}

