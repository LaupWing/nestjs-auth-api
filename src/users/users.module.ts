import { Module } from "@nestjs/common"
import { UsersService } from "./providers/users.service"
import { UsersController } from "./controllers/users.controller"
import { PrismaModule } from "../prisma/prisma.module"

@Module({
   imports:[
      PrismaModule 
   ],
   controllers: [
      UsersController
   ],
   providers: [
      UsersService,
   ],
   exports: [
      UsersService
   ]
})
export class UsersModule {}
