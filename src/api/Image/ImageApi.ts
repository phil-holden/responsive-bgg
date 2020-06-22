import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { BggClient, ImageClient } from "../Common/ApiClients"
import { BggImageResponse } from "./ImageModels";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {

  let image = context.bindings.image;

  if (image == undefined) {
    let imageId = context.bindingData.imageId;
    const bggResponse = await BggClient.get<BggImageResponse>(`images/${imageId}`);
    
    console.log(bggResponse.data.images.original.url);
    const imageResponse = await ImageClient.get(bggResponse.data.images.original.url);
    context.res = imageResponse;
// //   let data = response.data.items.map<HotListItem>(item =>
// //     ({
// //       id: item.objectid,
// //       name: item.name,
// //       yearPublished: item.yearpublished,
// //       imageId: item.rep_imageid
// //     })
// //   );

//   context.res.body = response.data;
  }
  else {
    context.res.body = image;
  }
};

export default httpTrigger;
