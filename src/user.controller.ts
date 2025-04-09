import { Body, Controller, Delete, Get, Header, HttpCode, Inject, Param, Post, Put } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UsersStore } from "./users.store";

@Controller('/user')
export class UserController{



//    constructor(store:UsersStore){
//     console.log(store);
//    }
//    constructor(@Inject('DATABASE_NAME') private dbname:string){
//      console.log(dbname);
//    }


constructor(@Inject('MAIL') private mail:string[])
{
    console.log(mail);
}


    //  USERS: CreateUserDto[] = [];

    // @Get('/profile')
    // @HttpCode(201)
    // getProfile(){
    //     return this.USERS
    // }

    // @Post('/add')
    // @Header('cache-control', 'none')
    // @Header('x-control','none')
    // postProfile( @Body() createUserDto:CreateUserDto){
    //     this.USERS.push(createUserDto);
    //     return "User Added Successfully"
    // }

    // @Put('/update/:id')
    // putProfile(@Param('id') id: string, @Body() updatedUserDto: CreateUserDto) {
    //     const userIndex = this.USERS.findIndex(user => user.id === +id); // Convert to number with +
    //     if (userIndex === -1) {
    //         return 'User not found';
    //     }
    
    //     this.USERS[userIndex] = updatedUserDto;
    //     return 'User updated successfully';
    // }
    
    // @Delete('/delete/:id')
    // deletedProfile(@Param('id') id: string) {
    //     const initialLength = this.USERS.length;
    //     this.USERS = this.USERS.filter(user => user.id !== +id);
        
    //     if (this.USERS.length === initialLength) {
    //         return 'User not found';
    //     }
    
    //     return 'User deleted successfully';
    // }
    
}