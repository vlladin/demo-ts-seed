import {Component, Input, Output, EventEmitter} from '@angular/core';
import {UserModel} from "../shared/UserModel";

@Component({
    selector: 'user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})

export class UserComponent {
    @Input() user: UserModel;
    @Output() userNameEvent = new EventEmitter<string>();

    private classParam: any;

    constructor() {
    }

    ngOnInit() {
        this.classParam = {};
        this.classParam.red = this.user.age > 33;
        this.classParam.green = this.user.age <= 33;
    }

    private outputUserName = () => {
        this.userNameEvent.emit(this.user.name);
    }
}