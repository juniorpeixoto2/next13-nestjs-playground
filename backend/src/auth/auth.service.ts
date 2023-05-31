import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserAuthDto } from './dto/create-user-auth.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService, private prisma: PrismaService) {}

  async register(createUserAuthDto: CreateUserAuthDto) {
    return this.prisma.users.create({
      data: {
        name: createUserAuthDto.name,
        email: createUserAuthDto.email,
        password: createUserAuthDto.password,
      },
    });
  }

  async signIn(email, pass) {
    const user = await this.prisma.users.findFirst({
      where: {
        email,
      },
    });

    if (!user) {
      throw new UnauthorizedException('E-mail e/ou Senha Incorretos.');
    }

    if (user?.password !== pass) {
      throw new UnauthorizedException('E-mail e/ou Senha Incorretos.');
    }
    const payload = { sub: user.id, username: user.email };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
