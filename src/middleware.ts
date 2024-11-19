import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
const JWT_SECRET = "genius";

interface JwtPayloadWithId extends JwtPayload {
  id: string;
}

export const auth = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers["authorization"];
  const decodedToken = jwt.verify(
    token as string,
    JWT_SECRET
  ) as JwtPayloadWithId;

  if (decodedToken) {
    req.userId = decodedToken.id;
    next();
  } else {
    res.status(403).json({
      warning: "Your are not logged in",
    });
  }
};
