import {Injectable} from "@angular/core";
import {UserModel} from "./user.model";
import {Observable} from "rxjs";
import {Http, Response, Headers, RequestOptions} from "@angular/http";

@Injectable()
export class UserService {
    public listOfUsers: UserModel[];

    constructor(
        private http: Http
    ){
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

    getHttpUsers(): Observable<any[]> {
        return this.http.get("http://127.0.0.1:3001/users")
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error || 'Server error'));

    }

    registerHttpUser(body: Object): Observable<any[]> {
        let bodyString = JSON.stringify(body);
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});

        return this.http.post("http://127.0.0.1:3001/user/create", body, options)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw('Server error'));
    }
}