import {
  Controller,
  Get,
  Post,
  Query,
  ValidationPipe,
  Param,
  UsePipes,
  Body,
} from '@nestjs/common';
import { PlayerService } from './player.service';
import { PlayerEntity } from './dbEntities/PlayerEntity';
import { GetPlayerQueryParams } from './dto/query/GetPlayerParams';
import { PlayerDto } from './dto/body/PlayerDto';
import { IsValidMongoObjectPipe } from 'src/lib/pipes/is.mongo.id';

@Controller('player')
export class PlayerController {
  constructor(private playerService: PlayerService) {}

  @Get('/')
  async get(
    @Query(ValidationPipe) query: GetPlayerQueryParams,
  ): Promise<PlayerEntity[]> {
    const { limit, skip, active } = query;
    const players = await this.playerService.get({}, limit, skip);
    return players;
  }

  @Get('/:id')
  async getById(@Param('id', IsValidMongoObjectPipe) id: string): Promise<PlayerEntity> {
    const player = await this.playerService.getById(id);
    return player;
  }

  @Post('/')
  @UsePipes(ValidationPipe)
  async post(@Body() player: PlayerDto): Promise<PlayerEntity> {
    const result = await this.playerService.create(player);
    return result;
  }
}
