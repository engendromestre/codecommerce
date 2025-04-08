import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { Observable } from 'rxjs';

interface JwtPayload {
  userId: string;
  username: string;
}

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request: Request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromReader(request);
    if (!token) {
      throw new UnauthorizedException(); // 401
    }

    try {
      const payload = this.jwtService.verify<JwtPayload>(token);
      request['user'] = payload;
      return true;
    } catch (error) {
      // Handle the error or log it
      console.error('Error occurred while verifying JWT token:', error);
      throw new UnauthorizedException(); // 401
    }
  }

  private extractTokenFromReader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
