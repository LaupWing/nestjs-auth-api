import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common"
import { JwtService } from "@nestjs/jwt"

@Injectable()
export class AuthGuard implements CanActivate {
   constructor(private jwt_service: JwtService) {}

   async canActivate(
      context: ExecutionContext,
   ): Promise<boolean> {
      const request = context.switchToHttp().getRequest()
      const token = this.extractTokenFromHeader(request)
      console.log(token)
      if (!token) {
         throw new UnauthorizedException()
      }

      try {
         const payload = await this.jwt_service.verifyAsync(
            token,
            {
               secret: "secret"
            }
         )

         request.user = payload
      } catch {
         throw new UnauthorizedException()
      }

      return true
   }

   private extractTokenFromHeader(request: any): string {
      const [type, token] = request.headers.authorization.split(" ") ?? []
      return type === "Bearer" ? token : undefined
   }
}
