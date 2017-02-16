import {Injectable} from "@angular/core";
import {UserModel} from "./user.model";

@Injectable()
export class UserService {
    public listOfUsers: UserModel[];

    constructor(){
        this.initModel();
        console.log("UserService")
    }

    initModel = (): void => {
        let ret: UserModel[] = [];
        let user: UserModel;

        for (let i = 0; i < 20; i++) {
            user = new UserModel(
                "user-" + i.toString(),
                "password-" + i.toString(),
                "info-" + i.toString(),
                "https://upload.wikimedia.org/wikipedia/commons/0/07/Avatar_girl_face.png"
            );
            ret.push(user);
        }
        this.listOfUsers = ret;
    };

    getUsers = (): UserModel[] => {
        return this.listOfUsers;
    };
}