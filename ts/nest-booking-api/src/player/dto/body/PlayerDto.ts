import { IsEmail, MinLength, MaxLength } from 'class-validator';
import { projected } from '../../../lib/decorators/projected';


export class PlayerDto {

  @IsEmail()
  @projected()
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

  @projected()
  active: boolean;  
}
