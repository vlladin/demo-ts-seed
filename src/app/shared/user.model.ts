export class UserModel {

    constructor(
        public username: string,
        public password: string,
        public info: string,
        public avatarPath: string
    ) {
    }
}