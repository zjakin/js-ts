import { Request, Response, NextFunction } from 'express';
import { IsEmail, MinLength, MaxLength } from 'class-validator';
import { projected } from '../../lib/decorators/projected';
import { Utils } from '../../lib/Utils';
import { IRequest } from '../abstract/IRequest';

export class PlayerModel {

  @IsEmail()
  @projected()  //Projected is a custom decorator. Function Utils.createProjectionString checks all class params decorated with @projected and creates projection string for mongoose query
  email: string;

  @projected()
  id: string;

  @MinLength(6)
  @projected()
  name: string;

  @MaxLength(20)
  @projected()
  surname: string;

  @projected()
  phone: string;

  static async validate(req: Request, res: Response, next: NextFunction): Promise<any> {
    const paramsInstance = Utils.getTypeInstanceFromJson<PlayerModel>(PlayerModel, req.body);
    const errorObject = await Utils.validateRequestModel<PlayerModel>(paramsInstance);
    if (errorObject) {
      res.status(errorObject.status).json(errorObject.message);
    } else {
      const myReq: IRequest<PlayerModel> = req as IRequest<PlayerModel>;
      myReq.paramsInstance = paramsInstance;
      next();
    }
  }
}
