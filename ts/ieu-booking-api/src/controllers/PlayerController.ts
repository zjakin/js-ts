import { inject, interfaces } from "inversify";
import {
  controller,
  httpGet,
  httpPost,
  BaseHttpController,
} from "inversify-express-utils";
import { NotFoundResult } from "inversify-express-utils/dts/results";
import { IRequest } from "../dto/abstract/IRequest";
import { PlayerEntity } from "../dbEntities/PlayerEntity";
import { IPlayerService } from "../services/IPlayerService";
import { GetPlayerQueryParams } from "../dto/query/GetPlayerParams";
import { GetPlayerByIdParam } from "../dto/path/GetPlayerByIdPathParam";
import { PlayerModel } from "../dto/body/PlayerModel";

@controller("/player")
export class PlayerController extends BaseHttpController {
  @inject("IPlayerService")
  playerService: IPlayerService;

  @httpGet("/", GetPlayerQueryParams.validate)
  async get(req: IRequest<GetPlayerQueryParams>): Promise<PlayerEntity[]> {
    const {
      paramsInstance: { limit, skip },
    } = req;
    const players = await this.playerService.get({}, limit, skip);
    return players;
  }

  @httpGet("/:id", GetPlayerByIdParam.validate)
  async getById(req: IRequest<any>): Promise<PlayerEntity | NotFoundResult> {
    const {
      params: { id },
    } = req;
    const player = await this.playerService.getById(id);
    return player || this.notFound();
  }

  @httpPost("/", PlayerModel.validate)
  async post(req: IRequest<PlayerModel>): Promise<PlayerEntity> {
    const player: PlayerModel = req.paramsInstance;
    const result = await this.playerService.create(player);
    return result;
  }
}
