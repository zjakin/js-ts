import { PipeTransform, NotFoundException } from '@nestjs/common';
import { Types } from 'mongoose';

export class IsValidMongoObjectPipe implements PipeTransform {
  transform(value: any): any {
    if (!Types.ObjectId.isValid(value)) {
      throw new NotFoundException();
    }
    return value;
  }
}
