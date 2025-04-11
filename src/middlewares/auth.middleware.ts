import { Injectable, NestMiddleware, UnauthorizedException } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization;
    const token = authHeader?.split(" ")[1];

    if (!token) {
      throw new UnauthorizedException("No token provided");
    }

    try {
      const decoded = jwt.verify(token, 'your_jwt_secret'); // 🔐 Replace with your secret or env variable
      (req as any).user = decoded; // Optionally attach user info to request
      next();
    } catch (error) {
      throw new UnauthorizedException("Invalid token");
    }
  }
}
