import {Controller, UseGuards} from '@nestjs/common';
import {Crud, CrudController, CrudRequest, Override, ParsedBody, ParsedRequest} from "@nestjsx/crud";
import {Role} from "../../common/entities/role.entity";
import {RoleService} from "../../common/api/role/role.service";
import {Rem} from "../../common/entities/rem.entity";
import {RemService} from "./rem.service";
import {JwtGuard} from "../../common/guards/jwt.guard";

@UseGuards(JwtGuard)
@Crud({
    model: {
        type: Rem,
    },
    params: {
        id: {
            type: 'uuid',
            primary: true,
            field: 'id'
        },
    },
    query: {
        sort: [
            {
                field: 'id',
                order: 'DESC',
            },
        ],
    },
})
@Controller('rem')
export class RemController implements CrudController<Rem> {
    constructor(public service: RemService) {
    }

    get base(): CrudController<Rem> {
        return this;
    }

    @Override('updateOneBase')
    coolFunction(@ParsedRequest() req: CrudRequest, @ParsedBody() dto: Rem) {
        console.log(dto);
        return this.base.updateOneBase(req, dto);
    }
}

