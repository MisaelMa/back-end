// Modules
import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {PassportModule} from '@nestjs/passport';
import {JwtModule} from '@nestjs/jwt';
import {ConfigModule} from './../../config/config.module';
import {Configuration} from '../../config/config.keys';
// Controllers
import {AuthController} from './auth.controller';
// Services
import {AuthService} from './auth.service';
import {ConfigService} from './../../config/config.service';
// Entities
import {User} from '../../entities/user.entity';
// Strategies
import {JwtStrategy} from './strategies/jwt.strategy';

@Module({
    imports: [
        TypeOrmModule.forFeature([User]),
        PassportModule.register({defaultStrategy: 'jwt'}),
        JwtModule.registerAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory(config: ConfigService) {
                return {
                    secret: config.get(Configuration.APP_SECRET_KEY),
                    signOptions: {expiresIn: '5m'},
                };
            },
        }),
    ],
    controllers: [AuthController],
    providers: [AuthService, ConfigService, JwtStrategy],
    exports: [JwtStrategy, PassportModule],
})
export class AuthModule {
}
