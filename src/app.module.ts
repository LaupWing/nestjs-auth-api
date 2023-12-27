import { Module } from "@nestjs/common"
import { AppController } from "./app.controller"
import { AppService } from "./app.service"
import { UsersModule } from "./users/users.module"
import { ApisModule } from './apis/apis.module';

@Module({
   imports: [UsersModule, ApisModule],
   controllers: [AppController],
   providers: [AppService],
})
export class AppModule {}
