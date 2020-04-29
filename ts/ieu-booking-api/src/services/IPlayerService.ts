import { PlayerEntity } from '../dbEntities/PlayerEntity';
import { PlayerModel } from '../dto/body/PlayerModel';

export interface IPlayerService {
  get(filter: any, limit: number, skip: number): Promise<PlayerEntity[]>;
  getById(id: string): Promise<PlayerEntity | null>;
  create(player: PlayerModel): Promise<PlayerEntity>;
}
