import { Injectable, NotAcceptableException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class AuthService {
    constructor(private readonly userService: UserService, private jwtService: JwtService) { }
    async validateUser(email: string, password: string): Promise<any> {
        const user = await this.userService.findOneByEmail(email);
        
        if (!user) {
            throw new NotAcceptableException('could not find the user');
        }
        var passwordValid = await bcrypt.compare(password, user.password)

        if (user && passwordValid) {
            return user;
        }
        return null;
    }
    async login(user: User) {
        const payload = { email: user.email, id: user.id, roles: JSON.parse(user.roles) };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}