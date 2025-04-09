import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UsersStore } from './users.store';


@Module({
  imports: [],
  controllers: [UserController],
  providers: [{provide:UsersStore,useClass:UsersStore},{provide:'DATABASE_NAME',useValue:'Moon_Knight'},{provide:'MAIL',useValue:['admin@domin.com','no-replay@domin.com']}],
})
export class AppModule {}
