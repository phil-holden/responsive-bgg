import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { BggClient, ImageClient } from "../Common/ApiClients"
import { BggImageResponse } from "./ImageModels";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {

  let image = context.bindings.image;

  // If the image isn't in blob storage download it from bgg
  // and save it for next time
  if (image == undefined) {
    let imageId = context.bindingData.imageId;

    const bggResponse = await BggClient.get<BggImageResponse>(`images/${imageId}`);

    const imageResponse = await ImageClient.get(bggResponse.data.images.square200.url);

    image = Buffer.from(imageResponse.data, 'base64');

    context.bindings.saveImage = image;
  }

  context.res = {
    headers: {'Content-Type': 'image/png' },
    body: image
  }
};

export default httpTrigger;
