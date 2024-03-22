
import { IsNotEmpty, MinLength, Matches } from 'class-validator';

export class CreateAllUserDto {
    @IsNotEmpty()
    username: string;

    @IsNotEmpty()
    @MinLength(6, { message: 'Password must be at least 6 characters long' })
    @Matches(/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/, { message: 'Password must contain at least one uppercase letter and one lowercase letter' })
    password: string;
}
