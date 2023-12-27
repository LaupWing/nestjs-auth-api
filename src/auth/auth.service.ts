import { Injectable } from "@nestjs/common"
import { CreateAuthDto } from "./dto/create-auth.dto"
import { UpdateAuthDto } from "./dto/update-auth.dto"
import { UsersService } from "src/users/users.service"
import bcrypt from "bcrypt"

@Injectable()
export class AuthService {
   constructor(
      private readonly use_service: UsersService
   ) {}

   create(createAuthDto: CreateAuthDto) {
      return "This action adds a new auth"
   }

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

   async signIn(username: string, password: string) {
      const user = await this.use_service.findOne(username)
      if (!user) {
         return null
      }
      
      bcrypt.compare(password, user.password)
      return `This action removes a #${username} auth`
   }
}
