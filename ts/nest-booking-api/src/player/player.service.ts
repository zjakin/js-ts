import { Injectable, NotFoundException } from '@nestjs/common';
import { PlayerEntity } from './dbEntities/PlayerEntity';
import { PlayerDto } from './dto/body/PlayerDto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class PlayerService {
  constructor(
    @InjectModel('Player') private playerDao: Model<PlayerEntity>,
  ) {}

  async get(filter: any, limit: number, skip: number): Promise<PlayerEntity[]> {
    const result = await this.playerDao
      .find(filter)
      .limit(Number(limit))
      .skip(Number(skip))
      .exec();

    return result;
  }

  async getById(id: string): Promise<PlayerEntity | null> {
    const result = this.playerDao.findOne({ _id: id });
    if (!result) {
      throw new NotFoundException();
    }
    return result;
  }
  async create(player: PlayerDto): Promise<PlayerEntity> {
    const result = await this.playerDao.create(player);
    return result;
  }
}
