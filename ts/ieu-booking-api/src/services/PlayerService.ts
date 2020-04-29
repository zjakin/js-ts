import { injectable, inject } from 'inversify';
import { IPlayerService} from './IPlayerService';
import { IPlayerRepository } from '../repositories/IPlayerRepository';
import { PlayerModel } from '../dto/body/PlayerModel';
import { PlayerEntity } from '../dbEntities/PlayerEntity';
import { Utils } from '../lib/Utils';

@injectable()
export class PlayerService implements IPlayerService {
  
  @inject('IPlayerRepository')
  playerRepository: IPlayerRepository;
  projection: string;
  
  constructor() {
    this.projection = Utils.createProjectionString<PlayerModel>(PlayerModel);
  }

  async get(filter: any, limit: number, skip: number): Promise<PlayerEntity[]> {
    const result = await this.playerRepository.get(filter, limit, skip, this.projection);
    return result;
  }

  async getById(id: string): Promise<PlayerEntity | null> {
    const player = await this.playerRepository.getById(id, this.projection);
    return player;
  }
  async create(player: PlayerModel): Promise<PlayerEntity> {
    const result = await this.playerRepository.create(player);
    return result;
  }
}
