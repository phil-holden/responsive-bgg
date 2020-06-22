import { AzureFunction, HttpRequest } from "@azure/functions"
import { HotlistContext } from './HotlistContext';
import { HotlistItem, BggHotnessResponse } from "./HotlistModels";
import { BggClient } from "../Common/BggClient"

const httpTrigger: AzureFunction = async function (context: HotlistContext, req: HttpRequest): Promise<void> {
  let requestCount = context.bindingData.count;

  const bggResponse = await BggClient.get<BggHotnessResponse>(`hotness?domain=boardgame&showcount=${requestCount}`);
  
  context.res.body = {
    items: bggResponse.data.items.map<HotlistItem>(item =>
      ({
        id: item.objectid,
        name: item.name,
        yearPublished: item.yearpublished,
        imageId: item.rep_imageid
      })
    )
  };
};

export default httpTrigger;
