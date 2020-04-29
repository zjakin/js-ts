import { Request, Response, NextFunction } from 'express';
import { Types } from 'mongoose';

export class GetPlayerByIdParam {
  static async validate(req: Request, res: Response, next: NextFunction): Promise<any> {
    if (!Types.ObjectId.isValid(req.params.id)) {
      res.status(404).send();
    } else {
      next();
    }
  }
}
