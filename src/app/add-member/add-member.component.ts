import {Component} from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators} from "@angular/forms";
import {validEmail} from "../shared/email-validator";

@Component({
    selector: 'add-member',
    templateUrl: './add-member.component.html',
    styleUrls: ['./add-member.component.css']
})

export class AddMemberComponent {

    private user: FormGroup;

    constructor(private builder: FormBuilder) {
    }

    ngOnInit(){
        // this.user = this.builder.group({
        //     name: ['', [Validators.required, Validators.minLength(2)]],
        //     account: this.builder.group({
        //         email: ['', [Validators.required, Validators.minLength(2)]],
        //         password: ['', [Validators.required, Validators.minLength(2)]],
        //
        //     })
        // });

        this.user = new FormGroup({
            name: new FormControl('lalala', [Validators.required, Validators.minLength(2)]),
            account: new FormGroup({
                email: new FormControl('', [Validators.required, validEmail]),
                password: new FormControl('', [Validators.required])
            })
        });

        this.user.setValue({
            name:"alex",
            account:{
                email:"lala@example.com",
                password:"password"
            }
        })

        this.user.reset();
    }

    onSubmit(e) {
        e.preventDefault();
        console.log(this.user.value, this.user.valid);
    }
}