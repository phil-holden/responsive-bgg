import { Url } from "url";

export interface BggGeekItemResponse {
  item: BggGeekItem
}

export interface BggGeekItem {
  itemId: string,
  name: string,
  yearPublished: string,
  imageUrl: Url
}

export interface GameResponse {
  game: GameDetail
}

export interface GameDetail {
  gameId: string,
  name: string,
  yearPublished: string,
  imageUrl: Url
}
