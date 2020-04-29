import { injectable } from "inversify";
import { MongooseRepository } from "./MongooseRepository";
import { IPlayerRepository } from "./IPlayerRepository";
import { PlayerEntity } from "../dbEntities/PlayerEntity";
import schema from "./schemas/player";
import { PlayerModel } from "../dto/body/PlayerModel";

@injectable()
export class PlayerRepository extends MongooseRepository<PlayerEntity>
  implements IPlayerRepository {
  constructor(db: any) {
    super("players", schema(), db);
  }
  async get(
    filter: any,
    limit: number,
    skip: number,
    projection?: string
  ): Promise<PlayerEntity[]> {
    return this.model
      .find(filter, projection)
      .limit(limit)
      .skip(skip)
      .lean();
  }
  async getById(id: string, projection?: string): Promise<PlayerEntity | null> {
    const filter = { _id: id };
    return this.model.findOne(filter, projection).lean();
  }
  async create(player: PlayerModel): Promise<PlayerEntity> {
    return await this.model.create(player);
  }
}
