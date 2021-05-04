import { Module } from '@nestjs/common';
import { RemController } from './rem.controller';
import { RemService } from './rem.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Role} from "../../common/entities/role.entity";
import {RoleController} from "../../common/api/role/role.controller";
import {RoleService} from "../../common/api/role/role.service";
import {Rem} from "../../common/entities/rem.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Rem])],
  controllers: [RemController],
  providers: [RemService]
})
export class RemModule {}