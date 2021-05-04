import {IsEmail, IsNotEmpty, IsString} from 'class-validator';

export class AuthDto {
    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    password: string;
}


export class Signin {
    @IsNotEmpty()
    @IsString()
    uuid: string;
}
