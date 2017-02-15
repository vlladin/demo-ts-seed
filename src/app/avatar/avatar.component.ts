import {Component, Input} from '@angular/core';

@Component({
    selector: 'avatar',
    templateUrl: './avatar.component.html',
    styleUrls: ['./avatar.component.css']
})

export class AvatarComponent {
    @Input() path: string;
}