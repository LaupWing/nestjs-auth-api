import { Module } from "@nestjs/common"
import { ApisService } from "./providers/apis.service"
import { ApisController } from "./controllers/apis.controller"

@Module({
   controllers: [ApisController],
   providers: [ApisService],
})
export class ApisModule {}
