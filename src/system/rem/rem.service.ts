import { Injectable } from '@nestjs/common';
import {TypeOrmCrudService} from "@nestjsx/crud-typeorm";
import {Role} from "../../common/entities/role.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {Rem} from "../../common/entities/rem.entity";

@Injectable()
export class RemService extends TypeOrmCrudService<Rem> {
    constructor(@InjectRepository(Rem) repo) {
        super(repo);
    }
}
