import {
   Controller,
   Post,
   Body,
   Get,
   Request,
   UseGuards,
} from "@nestjs/common"
import { AuthService } from "../providers/auth.service"
import { SignInAuthDto } from "../dto/signin-auth-dto"
import { AuthGuard } from "../guard/auth.guard"

@Controller("auth")
export class AuthController {
   constructor(private readonly authService: AuthService) {}

   @Post("login")
   signIn(@Body() signInAuthDto: SignInAuthDto) {
      return this.authService.signIn(signInAuthDto)
   }

   @UseGuards(AuthGuard)
   @Get("profile")
   getProfile(@Request() req) {
      console.log("test")
      return req.user
   }
}
