import { Document } from 'mongoose';

export class PlayerEntity extends Document {
  email: string;
  id: string;
  name: string;
  surname: string;
  phone: string;
}
