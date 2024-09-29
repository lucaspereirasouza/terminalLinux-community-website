import { Injectable } from "@nestjs/common";

@Injectable()
export class UsersService{
    private users = [];

    create(user){
        this.users.push(user);
    }
    findall(){
        return this.users;
    }
}