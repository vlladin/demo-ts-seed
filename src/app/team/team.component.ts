import {Component, Input} from '@angular/core';
import {UserModel} from "../shared/user.model";
import {UserService} from "../shared/user.service";

@Component({
    selector: 'team',
    templateUrl: './team.component.html',
    styleUrls: ['./team.component.css']
})

export class TeamComponent {

    private userList: UserModel[];

    constructor(private usersService: UserService){

    }

    ngOnInit(){
        this.userList = this.usersService.getUsers();



        this.usersService.getHttpUsers().subscribe(
            data => console.log(data),
            err => {
                console.log(err);
            });

        this.usersService.registerHttpUser({name:"alex"}).subscribe(
            data => console.log(data),
            err => {
                console.log(err);
            });
    }

    onUserName = (event):void => {
        console.log("Clicked", event)
    }
}