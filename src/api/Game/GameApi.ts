import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { BggClient } from "../Common/BggClient"
import { GameContext } from "./GameContext"
import { BggGeekItemResponse, GameResponse } from "./GameModels"

const httpTrigger: AzureFunction = async function (context: GameContext, req: HttpRequest): Promise<void> {
  let gameId = context.bindingData.gameId;

  const bggResponse = await BggClient.get<BggGeekItemResponse>(`geekitems?objecttype=thing&objectid=${gameId}`);
  
  let response: GameResponse = {
    game: {
      gameId: bggResponse.data.item.itemId,
      name: bggResponse.data.item.name,
      yearPublished: bggResponse.data.item.yearPublished,
      imageUrl: bggResponse.data.item.imageUrl
    }
  }

  context.res.body = response;
};

export default httpTrigger;
