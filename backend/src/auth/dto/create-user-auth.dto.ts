import { IsString } from 'class-validator';

export class CreateUserAuthDto {
  @IsString()
  name: string;

  @IsString()
  email: string;

  @IsString()
  password: string;
}
