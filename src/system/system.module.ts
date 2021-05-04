import { Module } from '@nestjs/common';
import { RemModule } from './rem/rem.module';

@Module({
  imports: [RemModule]
})
export class SystemModule {}
