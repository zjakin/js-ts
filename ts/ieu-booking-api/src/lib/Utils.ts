import { ValidationError, validate } from 'class-validator';
import { plainToClass } from 'class-transformer';
import { getProjectedProperties } from '../lib/decorators/projected';

export class Utils {
  static createProjectionString<T>(type: new () => T): string {
    const instance: T = new type();
    const projectionObject = getProjectedProperties(instance);
    const props = Object.getOwnPropertyNames(projectionObject);

    return props.join(' ');
  }
  static getTypeInstanceFromJson<T>(type: new () => T, jsonParamsObject: any): T {
    const instance: T = plainToClass(type, jsonParamsObject);
    return instance;
  }

  static async validateRequestModel<T>(instance: T, skipMissingProperties: boolean = false): Promise<any> {
    const errors: ValidationError[] = await validate(instance, { skipMissingProperties });
    if (errors.length > 0) {
      const message = errors.map((error: ValidationError) => Object.values(error.constraints)).join(', ');
      return { message, status: 400 };
    } else {
      return null;
    }
  }
}
