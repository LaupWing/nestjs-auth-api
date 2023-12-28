import { Injectable } from "@nestjs/common"
import { CreateAuthDto } from "./dto/create-auth.dto"
import { UpdateAuthDto } from "./dto/update-auth.dto"
import { UsersService } from "src/users/users.service"
import bcrypt from "bcrypt"
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

   async signIn(signInAuthDto: SignInAuthDto) {
      const user = await this.use_service.findOne(signInAuthDto.email)
      if (!user) {
         return null
      }
      
      const result = await bcrypt.compare(signInAuthDto.password, user.password)
      console.log(result)
      
      return `This action removes a #${signInAuthDto.email} auth`
   }
}
