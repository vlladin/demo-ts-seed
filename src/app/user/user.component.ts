import {Component, Input, Output, EventEmitter, ViewChild} from '@angular/core';
import {UserModel} from "../shared/UserModel";
import {AvatarComponent} from "../avatar/avatar.component";

@Component({
    selector: 'user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})

export class UserComponent {
    @Input() user: UserModel;
    @Output() userNameEvent = new EventEmitter<string>();

    /**
     * Reference to the AvatarComponent child
     *
     *  Sau se poate folosi sintaxa:
     *  @ViewChild('componentInstance')
     *  daca folosim in template #componentInstance
     */
    @ViewChild(AvatarComponent)
    private avatarComponent: AvatarComponent;

    private classParam: any;

    constructor() {
    }

    ngOnInit() {
        this.classParam = {};
        this.classParam.red = this.user.age > 33;
        this.classParam.green = this.user.age <= 33;

        console.log("The ID is", this.avatarComponent.id);
    }

    private outputUserName = () => {
        this.userNameEvent.emit(this.user.name);
    }
}