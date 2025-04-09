import { Body, Controller, Delete, Get, Header, HttpCode, Param, Post, Put } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";

@Controller('/user')
export class UserController{

     USERS: CreateUserDto[] = [];

    @Get('/profile')
    @HttpCode(201)
    getProfile(){
        return this.USERS
    }

    @Post('/add')
    @Header('cache-control', 'none')
    @Header('x-control','none')
    postProfile( @Body() createUserDto:CreateUserDto){
        this.USERS.push(createUserDto);
        return "User Added Successfully"
    }

    @Put('/update/:id')
    putProfile(@Param('id') id: string, @Body() updatedUserDto: CreateUserDto) {
        const userIndex = this.USERS.findIndex(user => user.id === +id); // Convert to number with +
        if (userIndex === -1) {
            return 'User not found';
        }
    
        this.USERS[userIndex] = updatedUserDto;
        return 'User updated successfully';
    }
    
    @Delete('/delete/:id')
    deletedProfile(@Param('id') id: string) {
        const initialLength = this.USERS.length;
        this.USERS = this.USERS.filter(user => user.id !== +id);
        
        if (this.USERS.length === initialLength) {
            return 'User not found';
        }
    
        return 'User deleted successfully';
    }
    
}