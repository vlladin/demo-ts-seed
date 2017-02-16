import {AbstractControl} from "@angular/forms";

export const validEmail = (control: AbstractControl): {[key: string]: boolean} => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    console.log(re.test(control.value), control.value)
    return re.test(control.value) ? null : { nomail: true };
};