import { Url } from "url";

export interface BggImageResponse {
    images: {
        square200: {
            url: string
        },
        mediacard: {
            url: string
        },
        original: {
            url: string
        }
    }
  }
  