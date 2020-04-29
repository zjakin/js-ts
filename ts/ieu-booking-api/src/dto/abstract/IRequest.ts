import { Request } from 'express';

export interface IRequest<T> extends Request {
  paramsInstance: T;
  accountId: string;
}
