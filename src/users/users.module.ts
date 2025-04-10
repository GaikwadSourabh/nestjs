import { Module } from "@nestjs/common";
import { UserController } from "./controllers/user.controller";
import { UsersStore } from "./store/users.store";
import { UsersService } from "./services/users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { AccountController } from "./controllers/accounts.controller";
import { ParseDatePipe } from './parse-date.pipe';
import { AccountServices } from "./services/account.service";
import { error } from "console";

@Module({
  imports: [],
  controllers: [UserController,AccountController],
  providers: [{provide:UsersStore,useClass:UsersStore},{provide:'DATABASE_NAME',useValue:'Moon_Knight'},{provide:'MAIL',useValue:['admin@domin.com','no-replay@domin.com']}
               ,UsersService,CreateUserDto,ParseDatePipe,AccountServices,{provide:ParseDatePipe,useValue:{fromTimestamp:true,errorMsg:"Date transformation fail"}}],
  exports: [UsersService,ParseDatePipe]              
})
export class usersModule {}