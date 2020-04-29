import { Min, Max } from 'class-validator';
import { Request, Response, NextFunction } from 'express';
import { Type, Transform } from 'class-transformer';
import { Utils } from '../../lib/Utils';
import { IRequest } from '../abstract/IRequest';

export class GetPlayerQueryParams {
  @Min(1)
  @Max(50)
  @Type(() => Number)
  limit: number = 25;

  @Type(() => Number)
  skip: number = 0;

  @Transform(val => val == 'true')
  isListed: boolean = true;

  static async validate(req: Request, res: Response, next: NextFunction): Promise<any> {
    const paramsInstance = Utils.getTypeInstanceFromJson<GetPlayerQueryParams>(GetPlayerQueryParams, req.query);
    const errorObject = await Utils.validateRequestModel<GetPlayerQueryParams>(paramsInstance);
    if (errorObject) {
      res.status(errorObject.status).json(errorObject.message);
    } else {
      // req.bodyInstance = paramsInstance; //if wanna use type declaration in /lib/declarations
      const myReq: IRequest<GetPlayerQueryParams> = req as IRequest<GetPlayerQueryParams>;
      myReq.paramsInstance = paramsInstance;
      next();
    }
  }
}
