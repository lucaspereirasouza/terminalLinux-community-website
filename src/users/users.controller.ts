import { Body, Controller, Post } from "@nestjs/common";
import { UsersService } from "./users.service";


@Controller()
export class UsersController{
    constructor(private readonly userService: UsersService){}

    @Post()
    create(@Body() user){
        this.userService.create(user);
    }
}