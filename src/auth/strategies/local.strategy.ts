import { Strategy } from "passport-local"
import { PassportStrategy } from "@nestjs/passport"
import { Injectable } from "@nestjs/common"

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
   constructor() {
      super({
         usernameField: "email"
      })
   }

   async validate(email: string, password: string): Promise<any> {
      // Add your validation logic here
      // For example, check if the username and password are valid
      // and return the user object if they are valid
   }
}
