import { Module } from "@nestjs/common"
import { AuthService } from "./providers/auth.service"
import { AuthController } from "./controllers/auth.controller"
import { UsersModule } from "src/users/users.module"
import { JwtModule } from "@nestjs/jwt"

@Module({
   imports: [
      UsersModule,
      JwtModule.register({
         global: true,
         secret: "secret",
         signOptions: { expiresIn: "30s" }
      })
   ],
   controllers: [AuthController],
   providers: [
      AuthService
   ],
})
export class AuthModule {}
