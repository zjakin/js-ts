import { Container } from 'inversify';
import { PlayerService } from '../services/PlayerService';
import { IPlayerService } from '../services/IPlayerService';
import { IPlayerRepository } from '../repositories/IPlayerRepository';
import { PlayerRepository } from '../repositories/PlayerRepository';

export class IocResolver {
  container: Container;
  constructor(resources: any) {
    const { db } = resources;
    this.container = new Container();
    this.container
      .bind<IPlayerService>('IPlayerService')
      .to(PlayerService)
      .inRequestScope();
    this.container
      .bind<IPlayerRepository>('IPlayerRepository')
      .toDynamicValue(() => new PlayerRepository(db))
      .inSingletonScope();
  }
}
