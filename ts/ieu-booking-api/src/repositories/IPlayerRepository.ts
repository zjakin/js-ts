import { Model } from "mongoose";
import { PlayerEntity } from "../dbEntities/PlayerEntity";
import { PlayerModel } from "../dto/body/PlayerModel";

export interface IPlayerRepository {
  model: Model<PlayerEntity>;
  get(
    filter: any,
    limit: number,
    skip: number,
    projection?: string
  ): Promise<PlayerEntity[]>;
  getById(
    id: string,
    accountId: string,
    projection?: string
  ): Promise<PlayerEntity | null>;
  create(player: PlayerModel): Promise<PlayerEntity>;
}
