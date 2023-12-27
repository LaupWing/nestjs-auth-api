import { Module } from "@nestjs/common"
import { AppController } from "./app.controller"
import { AppService } from "./app.service"
import { UsersModule } from "./users/users.module"
import { ApisModule } from './apis/apis.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
   imports: [UsersModule, ApisModule, PrismaModule],
   controllers: [AppController],
   providers: [AppService],
})
export class AppModule {}
