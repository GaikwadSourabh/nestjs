import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UsersStore } from './users.store';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto';


@Module({
  imports: [],
  controllers: [UserController],
  providers: [{provide:UsersStore,useClass:UsersStore},{provide:'DATABASE_NAME',useValue:'Moon_Knight'},{provide:'MAIL',useValue:['admin@domin.com','no-replay@domin.com']}
               ,UsersService,CreateUserDto],
})
export class AppModule {}
