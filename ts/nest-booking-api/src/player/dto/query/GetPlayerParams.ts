import { Min, Max } from 'class-validator';
import { Type, Transform } from 'class-transformer';


export class GetPlayerQueryParams {
  @Min(1)
  @Max(10)
  @Type(() => Number)
  limit: number = 5;

  @Type(() => Number)
  skip: number = 0;

  @Transform(val => val == 'true')
  active: boolean = true;
}
