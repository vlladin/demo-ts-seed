import {Component, Input, Output, EventEmitter, ViewChild} from '@angular/core';
import {AvatarComponent} from "../avatar/avatar.component";
import {UserModel} from "../shared/user.model";
import {TruncatePipe} from "../shared/truncate.pipe";
import {UserService} from "../shared/user.service";

@Component({
    selector: 'user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css'],
    providers: [TruncatePipe]
})

export class UserComponent {
    @Input() user: UserModel;
    @Output() userNameEvent = new EventEmitter<string>();

    public appTitle: string;

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

    constructor(
        private truncatePipe: TruncatePipe,
        private usersService: UserService
    ) {
    }

    ngOnInit() {
    };

    private outputUserName = () => {
        this.userNameEvent.emit(this.user.username);
    }
}