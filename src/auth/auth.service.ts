import { Injectable, UnauthorizedException } from "@nestjs/common"
import { UpdateAuthDto } from "./dto/update-auth.dto"
import { UsersService } from "src/users/users.service"
import * as bcrypt from "bcrypt"
import { SignInAuthDto } from "./dto/signin-auth-dto"

@Injectable()
export class AuthService {
   constructor(
      private readonly use_service: UsersService
   ) {}
   
   findAll() {
      return `This action returns all auth`
   }

   findOne(id: number) {
      return `This action returns a #${id} auth`
   }

   update(id: number, updateAuthDto: UpdateAuthDto) {
      return `This action updates a #${id} auth`
   }

   remove(id: number) {
      return `This action removes a #${id} auth`
   }

   async signIn(sign_in_auth_dto: SignInAuthDto) {
      const user = await this.use_service.findOne(sign_in_auth_dto.email)
      console.log(user)
      console.log(sign_in_auth_dto)
      if (!user) {
         return null
      }
      
      const checking = await bcrypt.compare(sign_in_auth_dto.password, user.password)
      console.log(checking)

      if (checking) {
         throw new UnauthorizedException()
      }
      
      return `This action removes a #${sign_in_auth_dto.email} auth`
   }
}
