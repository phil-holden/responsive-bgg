export interface HotlistResponse {
  items: HotlistItem[]
}

export interface HotlistItem {
  id: string,
  name: string,
  yearPublished: string,
  imageId: string
}

export interface BggHotnessResponse {
  items: BggHotnessItem[]
}

export interface BggHotnessItem {
  objectid: string,
  name: string,
  yearpublished: string,
  rep_imageid: string
}
