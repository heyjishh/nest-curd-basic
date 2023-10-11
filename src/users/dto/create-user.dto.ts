import { IsEmail, IsNotEmpty, IsString, IsNumber, IsOptional, IsUUID } from '@nestjs/class-validator';

export class CreateUserDto {
    @IsOptional()
    @IsNumber()
    id: number;

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    password: string;

    @IsNotEmpty()
    @IsNumber()
    age: number;
}
