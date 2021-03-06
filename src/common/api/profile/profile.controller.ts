import {Controller, UseGuards} from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';

import { ProfileService } from './profile.service';
import { Profile } from '../../entities/profile.entity';
import {JwtGuard} from "../../guards/jwt.guard";

@UseGuards(JwtGuard)
@Crud({
  model: {
    type: Profile,
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
@Controller('profiles')
export class ProfileController implements CrudController<Profile> {
  constructor(public service: ProfileService) {}
}
