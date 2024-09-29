import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UsersController } from './users/users.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController,UsersController],
  providers: [AppService],
})
export class AppModule { 
}
